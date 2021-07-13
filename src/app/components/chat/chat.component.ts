import { ChangeDetectorRef, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { map } from 'rxjs/internal/operators/map';
import { FindArrayObject } from 'src/app/shared/helpers/helpersFunctions';
import { BaseService } from 'src/app/shared/services/base.service';
import { PubsubService } from 'src/app/shared/services/pubsub.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import FormsHandler from 'src/app/shared/FormsHandler/FormsHandler';
import { MessageModel, onlineOfflineModel, receiptModel, typingModel } from 'src/app/shared/models/chat';
import { VdkCallService } from 'src/app/shared/services/vdk-call.service';
import { Subscription, timer } from 'rxjs';
import { VdkM2MCallService } from 'src/app/shared/services/vdk-m2m-call.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @ViewChild('noCall') noCall: TemplateRef<any>;
  @ViewChild('incommingAudioCall') incommingAudioCall: TemplateRef<any>;
  @ViewChild('outgoingAudioCall') outgoingAudioCall: TemplateRef<any>;
  @ViewChild('AudioCallInProgress') AudioCallInProgress: TemplateRef<any>;
  @ViewChild('incommingVideoCall') incommingVideoCall: TemplateRef<any>;
  @ViewChild('outgoingVideoCall') outgoingVideoCall: TemplateRef<any>;
  @ViewChild('VideoCallInProgress') VideoCallInProgress: TemplateRef<any>;

  @ViewChild('groupIncommingAudioCall') groupIncommingAudioCall: TemplateRef<any>;
  @ViewChild('groupOutgoingAudioCall') groupOutgoingAudioCall: TemplateRef<any>;
  @ViewChild('groupOngoingAudioCall') groupOngoingAudioCall: TemplateRef<any>;
  @ViewChild('groupIncommingVideoCall') groupIncommingVideoCall: TemplateRef<any>;
  @ViewChild('groupVideoCall') groupVideoCall: TemplateRef<any>;

  editGroupModel = false;
  groupForm: FormGroup;
  loading = true;
  AllGroups = [];
  AllUsers = [];
  CopyAllUsers = [];
  activeChat: any = {
    chatHistory: []
  };
  message: string = '';
  currentUserName = StorageService.getAuthUsername();
  currentUserData = StorageService.getUserData();
  @ViewChild('messageInputElement') messageInputElement: ElementRef;
  threadType = 'THREAD';
  fileToSend: File = null;
  isActiveThread = false;
  popupimagesrc = '';
  screen = 'CHAT';
  sdkconnected = false;
  setToActive = null;
  countDownTime: Subscription;
  callTime = 0;
  calling = {
    participant: [],
    call_type: 'video',
    templateName: 'noCall',
    callerName: '',
    from: "",
    session: "",
  }

  settings = {
    isOnInProgressCamara: true,
    isOnInProgressMicrophone: true
  }

  get selectedTemplate() {
    const templateList = {
      noCall: this.noCall,
      incommingAudioCall: this.incommingAudioCall,
      outgoingAudioCall: this.outgoingAudioCall,
      AudioCallInProgress: this.AudioCallInProgress,
      incommingVideoCall: this.incommingVideoCall,
      outgoingVideoCall: this.outgoingVideoCall,
      VideoCallInProgress: this.VideoCallInProgress,
      groupIncommingAudioCall: this.groupIncommingAudioCall,
      groupOutgoingAudioCall: this.groupOutgoingAudioCall,
      groupOngoingAudioCall: this.groupOngoingAudioCall,
      groupIncommingVideoCall: this.groupIncommingVideoCall,
      groupVideoCall: this.groupVideoCall
    }
    return templateList[this.calling.templateName];
  }

  constructor(
    public pubsubService: PubsubService,
    public VdkCallService: VdkCallService,
    public m2mCallService: VdkM2MCallService,
    private svc: BaseService,
    private router: Router,
    private elRef: ElementRef,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private changeDetector: ChangeDetectorRef,
    private _fb: FormBuilder
  ) {
    this.groupForm = this._fb.group({
      'group_id': new FormControl('', [Validators.required]),
      'group_title': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    }, { updateOn: 'change' });
    this.pubsubService.initConfigure();
    this.VdkCallService.initConfigure();
    this.m2mCallService.initConfigure();
  }

  ngOnInit() {
    this.pubsubService.Client.on("connect", response => {
      console.error("connect", response);
      this.sdkconnected = true;
      if (!this.AllGroups.length) {
        this.getAllGroups();
      }
    });

    this.pubsubService.Client.on("disconnect", (response) => {
      console.log("disconnect", response);
      this.sdkconnected = false;
    });

    this.VdkCallService.Client.on("register", response => {
      console.error("register response", response);
    });

    this.VdkCallService.Client.on("connected", response => {
      this.sdkconnected = true;
      console.error("connected response", response);
    });

    this.VdkCallService.Client.on("call", response => {
      console.error("call response", response);
      switch (response.type) {
        case "CALL_RECEIVED":
          this.calling.session = response.session;
          this.calling.from = response.from;
          this.changeDetector.detectChanges();
          const full_name = this.findUserName(response.from);
          this.calling.callerName = full_name;
          this.calling.templateName = response.call_type == 'video' ? 'incommingVideoCall' : 'incommingAudioCall';
          this.calling.call_type = response.call_type;
          this.changeDetector.detectChanges();
          this.screen = 'MAIN';
          break;
        case "CALL_ENDED":
          this.resetCall();
          break;
        case "MISSED_CALL":
          this.resetCall();
          this.toastr.error("Opps", 'Missed Call')
          break;
        case "CALL_REJECTED":
          this.resetCall();
          this.toastr.error("Opps", 'user is busy')
          break;
        case "CALL_ACCEPTED":
          this.changeDetector.detectChanges();
          this.calling.templateName = this.calling.call_type == 'video' ? 'VideoCallInProgress' : 'AudioCallInProgress';
          this.startWatch();
          this.changeDetector.detectChanges();
          break;
        case "CALL_STATUS":
          const displaystyle = response.video_status ? 'block' : 'none';
          const callerHolderstyle = response.video_status ? 'none' : 'block';
          if (document.getElementById('remoteVideo')) document.getElementById('remoteVideo').style.display = displaystyle;
          if (document.getElementById('callerHolder')) document.getElementById('callerHolder').style.display = callerHolderstyle;
          break;
      }
    });

    // m2m

    this.m2mCallService.Client.on("connected", response => {
      this.sdkconnected = true;
      console.error("m2m connected response", response);
    });

    this.m2mCallService.Client.on("groupCall", response => {
      console.error("groupCall response", response);
      switch (response.type) {
        case "CALL_RECEIVED":
          const full_name = this.findUserName(response.from);
          this.calling.callerName = full_name;
          this.calling.templateName = response.call_type == 'video' ? 'incommingVideoCall' : 'incommingAudioCall';
          this.calling.call_type = response.call_type;
          this.calling.session = response.session;
          this.calling.from = response.from;
          this.changeDetector.detectChanges();
          this.changeDetector.detectChanges();
          this.screen = 'MAIN';
          break;
        case "CALL_ENDED":
          this.resetCall();
          break;
        case "MISSED_CALL":
          this.resetCall();
          this.toastr.error("Opps", 'Missed Call')
          break;
        case "CALL_REJECTED":
          this.resetCall();
          this.toastr.error("Opps", 'user is busy')
          break;
        case "CALL_ACCEPTED":
          this.changeDetector.detectChanges();
          this.calling.templateName = this.calling.call_type == 'video' ? 'VideoCallInProgress' : 'AudioCallInProgress';
          this.startWatch();
          this.changeDetector.detectChanges();
          break;
        case "CALL_STATUS":
          const displaystyle = response.video_status ? 'block' : 'none';
          const callerHolderstyle = response.video_status ? 'none' : 'block';
          if (document.getElementById('remoteVideo')) document.getElementById('remoteVideo').style.display = displaystyle;
          if (document.getElementById('callerHolder')) document.getElementById('callerHolder').style.display = callerHolderstyle;
          break;
      }
    });
  }

  ngAfterViewInit(): void {
    document.addEventListener("keyup", event => {
      if (event.code === 'Enter') {
        this.sendTextMessage();
      }
    });
    this.getUsers();

    this.pubsubService.Client.on("authentication_error", (res: any) => {
      console.log("authentication_error", res);
    });


    this.pubsubService.Client.on("offline", response => {
      console.log("offline", response);
      this.setOfflineStatus(response);
    });

    this.pubsubService.Client.on("online", (response: onlineOfflineModel) => {
      console.log("online", response);
      this.setOnlineStatus(response);
    });

    this.pubsubService.Client.on("message", response => {
      response = JSON.parse(JSON.stringify(response));
      console.trace("new message", response);
      if (response.type == 'text' || response.type == 'file' || response.type == 'image' || response.type == 'audio' || response.type == 'video') {
        this.scroll();
        const chatthread = this.findChatThread(response.to);
        const isActiveThread = chatthread.id == this.activeChat.id;
        chatthread['unReadCount'] = isActiveThread ? 0 : (chatthread['unReadCount'] || 0) + 1;
        response = this.messageBy(chatthread, response);
        response['isRead'] = isActiveThread;
        response['auto_created'] = chatthread['auto_created'];
        chatthread['lastMessage'] = response.content;
        chatthread['time'] = new Date(response.id);
        chatthread['type'] = response.type;
        this.pushMessage(chatthread, response);
        this.readSingleMessage(response, isActiveThread);
        setTimeout(() => {
          this.AllGroups.sort((a, b) => {
            return a.id == chatthread.id ? -1 : 1;
          });
        }, 500);
        this.changeDetector.detectChanges();
      } else if (response.type == 'typing') {
        this.setUserTyping(response);
      } else if (response.receiptType == 3) {
        let chName = response.topic || response.to;
        if (response.to != undefined)
          chName = response.to;
        const chatthread = this.findChatThread(chName);
        let message = FindArrayObject(chatthread.chatHistory, 'id', response.messageId);
        if (message) {
          message['readCount'] = (message['readCount'] || 0) + 1
        }
        this.changeDetector.detectChanges();
      }
    });

    this.pubsubService.Client.on("subscribed", response => {
      console.log("subscribed", response);
      this.setOnlineStatusforSubscribe(response);
    });

    if (this.messageInputElement) {
      fromEvent(this.messageInputElement.nativeElement, 'input')
        .pipe(
          map((event: Event) => (event.target as HTMLInputElement).value),
          debounceTime(3000),
          distinctUntilChanged()
        ).subscribe(data => {
          const sendMessage: MessageModel = {
            status: 0,
            size: 0,
            type: "typing",
            isGroupMessage: false,
            from: StorageService.getAuthUsername(),
            content: '0',
            id: new Date().getTime().toString(),
            key: this.activeChat.channel_key,
            to: this.activeChat.channel_name,
            date: new Date().getTime(),
          }
          this.pubsubService.sendMessage(sendMessage);
        });
    }
  }

  deleteGroup(group) {
    this.loading = true;
    const playload = {
      group_id: group.id
    }
    this.svc.post('DeleteGroup', playload).subscribe(v => {
      this.changeDetector.detectChanges();
      if (v && v.status == 200) {
        this.loading = false;
        this.getAllGroups();
        this.toastr.success('The group has been deleted!', 'Success!');
      } else {
        console.error(v.message);
        alert(v.message);
        this.changeDetector.detectChanges();
      }
    });
  }

  openModal(group) {
    if (group.auto_created) {
      alert('Can not change One to one group title');
      return;
    }
    group['group_id'] = group.id
    this.groupForm.reset(group);
    this.editGroupModel = true;
    this.changeDetector.detectChanges();
  }

  editGroup() {
    FormsHandler.validateForm(this.groupForm);
    console.error("this.groupForm.", this.groupForm.invalid);
    if (this.groupForm.invalid || this.loading) return;
    const playload = this.groupForm.value;
    this.loading = true;
    this.svc.post('RenameGroup', playload).subscribe(v => {
      if (v && v.status == 200) {
        this.getAllGroups();
        this.editGroupModel = false;
        this.loading = false;
        this.toastr.success('The group has been updated!', 'Success!');
      }
    });
  }

  getAllGroups() {
    this.loading = true;
    this.svc.get('AllGroups').subscribe(v => {
      this.loading = false;
      if (v && v.status == 200) {
        this.AllGroups = v.groups.map(chat => {
          if (chat['participants'].length) {
            chat['participants'] = chat['participants'].map(r => {
              r['username'] = r['username'] || r['full_name'];
              return r;
            });
          }
          chat['chatTitle'] = chat.auto_created ? chat['participants'][0]['full_name'] : chat.group_title;
          chat['Online'] = false;
          chat['key'] = chat.channel_key;
          chat['channel'] = chat.channel_name;
          chat['chatHistory'] = [];
          chat['TotalParticipants'] = chat['participants'].length;
          chat['onlineParticipants'] = 1;
          chat['isSeen'] = true;
          return chat;
        });
        console.error("this.activeChat.chatTitle", this.activeChat);
        if (!this.activeChat.chatTitle) {
          this.activeChat = this.AllGroups.length ? this.AllGroups['0'] : {};
        }
        if (this.setToActive) {
          const indexchat = this.AllGroups.find(group => group.id == this.setToActive)
          this.activeChat = indexchat ? indexchat : this.AllGroups['0'];
          this.setToActive = null;
        }
        this.isActiveThread = true;
        console.error("this.activeChat.chatTitle", this.activeChat);
        this.pubsubService.subscribeToChat(this.AllGroups);
      }
      setTimeout(() => {
        this.sortThread();
      }, 500);
      this.changeDetector.detectChanges();
    });
  }
  checkFileType(content: any) {
    let preview = content.includes('text/plain') ? ('./assets/images/txt.png') : content.includes('/pdf') ? ('./assets/images/pdf.png') : content.includes('/json') ? ('./assets/images/json.png') : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Icon-doc.svg/810px-Icon-doc.svg.png';
    if (content.includes('video/'))
      preview = './assets/images/video.png';
    if (content.includes('audio/'))
      preview = './assets/images/audio.png';
    return preview;
  }
  fileType(content: any) {
    return content.split(";")[0].split(":")[1]
  }
  findChatThread(channel) {
    return FindArrayObject(this.AllGroups, 'channel_name', channel);
  }

  setActiveChat(group) {
    this.isActiveThread = group.id == this.activeChat.id;
    if (!this.isActiveThread) this.message = '';
    this.activeChat = group;
    group['unReadCount'] = 0;
    this.screen = 'MSG';
    this.scroll();
    group.chatHistory = group.chatHistory || [];
    this.readsendMessage(group.chatHistory);
    this.changeDetector.detectChanges();
  }

  setchat(chat) {
    this.setToActive = chat.id;
  }

  readSingleMessage(response, isActiveThread) {
    if (response.from == this.currentUserName || !isActiveThread) return;
    const chatobj: receiptModel = {
      messageId: response.id,
      receiptType: 3,
      from: StorageService.getAuthUsername(),
      key: response.key,
      to: response.to,
      date: new Date().getTime()
    };
    this.pubsubService.readSingleMessage(chatobj);
  }

  readsendMessage(chatHistory) {
    const unreadchatHistory = chatHistory.filter(chat => !chat.isRead).map(chat => {
      const chatobj: receiptModel = {
        messageId: chat.id,
        receiptType: 3,
        from: StorageService.getAuthUsername(),
        key: chat.key,
        to: chat.to,
        date: new Date().getTime()
      };
      return chatobj;
    });
    if (unreadchatHistory.length) this.pubsubService.readMessage(unreadchatHistory);
    chatHistory = chatHistory.map(chat => {
      chat.isRead = true;
      return chat;
    });
  }

  handleFileInput(files: FileList) {
    this.fileToSend = files.item(0);
  }

  invalidSize() {
    return ((this.fileToSend.size / 1024) > 6144);
  }

  removeAttachment() {
    this.fileToSend = null;
  }

  getFileType(fileR) {
    let type = "file";
    const filetype = fileR.type;
    if (filetype.includes('image')) type = "image";
    else if (filetype.includes('audio')) type = "audio";
    else if (filetype.includes('video')) type = "video";
    return type;
  }

  sendTextMessage() {
    if ((!(/\S/.test(this.message))) && !this.fileToSend) {
      return;
    } else if (this.message.length > 400) {
      this.toastr.error("Message can not be more than 400 characters", "Opps!")
      return;
    } else if (this.fileToSend && this.invalidSize()) {
      this.toastr.error("The maximum size of file should be 6MBs.", "Opps!")
      this.fileToSend = null;
      return;
    }
    this.scroll();
    if (!this.message && !this.fileToSend) return;
    if (this.fileToSend) {
      var option = {
        id: new Date().getTime().toString(),
        from: StorageService.getAuthUsername(),
        topic: this.activeChat.channel_name,
        to: this.activeChat.channel_name,
        key: this.activeChat.channel_key,
        type: this.getFileType(this.fileToSend),
        date: new Date().getTime(),
      };
      this.pubsubService.Client.SendFile(this.fileToSend, option);
      this.fileToSend = null;
    }
    if (!this.message) return;
    const sendMessage: MessageModel = {
      status: 1,
      size: 0,
      type: "text",
      isGroupMessage: false,
      from: StorageService.getAuthUsername(),
      content: this.message,
      id: new Date().getTime().toString(),
      date: new Date().getTime(),
      key: this.activeChat.channel_key,
      to: this.activeChat.channel_name
    }
    this.pubsubService.sendMessage(sendMessage);
    this.message = '';
    this.scroll();
    if (!(this.AllGroups.length && this.activeChat.id == this.AllGroups[0].id)) {
      this.sortThread();
    }
  }

  typingmessage($event) {
    if ($event.key === "Enter") {
      this.sendTextMessage();
      return;
    }
    const sendMessage: MessageModel = {
      status: 0,
      size: 0,
      type: "typing",
      isGroupMessage: false,
      from: StorageService.getAuthUsername(),
      content: "1",
      id: new Date().getTime().toString(),
      key: this.activeChat.channel_key,
      to: this.activeChat.channel_name,
      date: new Date().getTime(),
    }
    this.pubsubService.sendMessage(sendMessage);
  }

  setOnlineStatusforSubscribe(response: onlineOfflineModel) {
    const indexchat = this.findChatThread(response.channel);
    if (indexchat) {
      let onlineNumbers = [...new Set(response.who.map(n => n.username))]
      indexchat['onlineParticipants'] = onlineNumbers && onlineNumbers.length || 1;
      if (indexchat && indexchat.auto_created) indexchat['Online'] = onlineNumbers.length > 1
    }
    this.changeDetector.detectChanges();
  }

  setOnlineStatus(response: onlineOfflineModel) {
    let indexchat = this.findChatThread(response.channel);
    if (!indexchat) return;
    if (indexchat.auto_created) indexchat['Online'] = true;
    if (!indexchat.auto_created) {
      indexchat['onlineParticipants'] = indexchat['onlineParticipants'] < indexchat['TotalParticipants'] ? indexchat['onlineParticipants'] + 1 : indexchat['onlineParticipants'];
    }
    this.changeDetector.detectChanges();
  }

  setOfflineStatus(response: onlineOfflineModel) {
    const indexchat = this.findChatThread(response.channel);
    if (indexchat && indexchat.auto_created) indexchat['Online'] = false;
    if (!indexchat.auto_created) {
      indexchat['onlineParticipants'] = indexchat['onlineParticipants'] > 2 ? indexchat['onlineParticipants'] - 1 : 1;
    }
    this.changeDetector.detectChanges();
  }

  setUserTyping(response: typingModel) {
    if (response.from == this.currentUserData.ref_id) return;
    let indexchat = FindArrayObject(this.AllGroups, 'channel_name', response.to);
    let typinguser = indexchat["participants"].find(e => e.ref_id == response.from);
    if (response.content == '1') {
      indexchat['TypingUserList'] = (indexchat['TypingUserList'] || []);
      indexchat['TypingUserList'] = [...new Set([typinguser])];
    } else if (response.content == '0') {
      indexchat['TypingUserList'] = indexchat['TypingUserList'].filter(e => e.ref_id != response.from);
    }
    indexchat['userTyping'] = indexchat['TypingUserList'].length && response.content != '0';
    let nameList = indexchat['TypingUserList'].map(userObj => userObj.full_name);
    if (nameList.length == 1) {
      indexchat['userTypingContent'] = nameList + ' ' + 'is typing...';
    } else if (nameList.length == 2) {
      indexchat['userTypingContent'] = nameList.join() + ' ' + 'are typing...';
    } else if (nameList.length > 2) {
      indexchat['userTypingContent'] = nameList.filter((i, j) => j < 2).join() + ' ' + 'and other are typing...';
    }
    this.changeDetector.detectChanges();
  }

  setMultiUserTyping(response, typinguser, indexchat) {
    if (response.content == '1') {
      indexchat['TypingUserList'] = [...new Set(typinguser)];
    } else if (response.content == '0') {
      indexchat['TypingUserList'] = indexchat['TypingUserList'].filter(e => e.ref_id != response.from);
    }
    this.changeDetector.detectChanges();
  }

  scroll(): void {
    setTimeout(() => {
      this.elRef.nativeElement.querySelector('.messagesBox').scrollTop = this.elRef.nativeElement.querySelector('.messagesBox').scrollHeight;
    }, 500);
  }

  changeSidebar($event) {
    this.threadType = $event;
    if (this.threadType == 'THREAD') {
      this.getAllGroups();
    }
  }

  newChat() {
    this.threadType = 'CHAT';
    this.changeDetector.detectChanges();
  }

  logout() {
    this.pubsubService.Disconnect();
    StorageService.clearLocalStorge();
    this.router.navigate(['login']);
  }

  sortThread() {
    if (this.activeChat.id) {
      this.AllGroups.sort((a, b) => {
        return a.id == this.activeChat.id ? -1 : 1;
      });
    }
  }

  messageBy(chatthread, response) {
    if (this.isShowName(chatthread, response)) {
      const messageByObj = FindArrayObject(chatthread.participants, 'ref_id', response.from);
      response['messageBy'] = messageByObj && messageByObj.full_name || '';
    }
    return response;
  }

  isShowName(chatthread, response) {
    if (chatthread['chatHistory'].length && response.from) {
      const previourmessage = chatthread['chatHistory'][chatthread['chatHistory'].length - 1];
      return previourmessage.from != response.from;
    }
    return true;
  }

  pushMessage(thread, response) {
    let newResponse = {};
    newResponse = JSON.parse(JSON.stringify(response));
    if (response.type == 'text' || !response.content) {
      thread['chatHistory'].push(newResponse);
    } else {
      var foundIndex = thread.chatHistory.findIndex(x => x.id == response.id);
      thread.chatHistory[foundIndex] = response;
    }
  }

  getLastMessage(group): string {
    const isactivethread = group.id == this.activeChat.id;
    if (!isactivethread && group.unReadCount) {
      return "Misread messages"
    } else if (group.type != 'text') {
      return group.type;
    }
    return group.lastMessage;
  }

  openImage(imagesrc): void {
    this.popupimagesrc = imagesrc;
    this.changeDetector.detectChanges();
  }

  closeImage() {
    this.popupimagesrc = null;
    this.changeDetector.detectChanges();
  }

  closeModal() {
    this.editGroupModel = false;
    this.changeDetector.detectChanges();
  }

  isHideThread() {
    return this.isMobile() ? this.screen != 'CHAT' : false;
  }

  isHideChatScreen() {
    return this.isMobile() ? this.screen != 'MSG' : false;
  }

  backScreen() {
    this.threadType = "THREAD";
    this.screen = "CHAT";
    this.changeDetector.detectChanges();
  }

  isMobile() {
    return window.innerWidth < 768
  }


  // call
  getUsers() {
    const data = {
      sorting: "ORDER BY full_name ASC",
      search_field: "full_name",
      search_value: '',
      condition: "contains",
    }
    this.svc.post('AllUsers', data).subscribe(res => {
      this.loading = false;
      if (res.status == 200) {
        this.CopyAllUsers = [...res.users];
        this.AllUsers = res.users;
      }
    })
  }
  findUserName(ref_id: string): string {
    const user = FindArrayObject(this.CopyAllUsers, 'ref_id', ref_id);
    return user ? user.full_name : '';
  }


  resetCall() {
    this.settings = {
      isOnInProgressCamara: true,
      isOnInProgressMicrophone: true
    }
    this.calling = {
      participant: [],
      call_type: 'video',
      templateName: 'noCall',
      callerName: '',
      from: "",
      session: "",
    }
    this.callTime = 0;
    this.screen = 'LISTING';
    if (this.countDownTime) {
      this.countDownTime.unsubscribe()
    }
    document.getElementById('OutgoingVideo').style.display = 'block';
    this.changeDetector.detectChanges();
  }

  stopCall() {
    this.calling.templateName = 'noCall';
    this.VdkCallService.endCall();
    this.resetCall();
    this.changeDetector.detectChanges();
    console.error("stopCall");
  }

  inCall(): boolean {
    return this.calling.templateName != 'noCall';
  }

  groupOutgoingVideoCall = false;

  startVideoCall() {
    if (this.activeChat.auto_created) {
      this.startOne2OneVideoCall();
    } else {
      this.startM2MVideoCall();
    }
  }

  startOne2OneVideoCall() {
    if (this.inCall()) return;
    this.calling.session = 'one_to_one';
    document.getElementById('OutgoingVideo').style.display = 'block';
    this.screen = 'MAIN';
    this.calling.templateName = 'outgoingVideoCall';
    this.calling['callerName'] = this.activeChat.chatTitle;
    this.changeDetector.detectChanges();
    const participantsList = this.activeChat.participants.filter(g => g.ref_id != this.currentUserName).map(g => g.ref_id);
    const params = {
      localVideo: document.getElementById("localVideo"),
      remoteVideo: document.getElementById("remoteVideo"),
      to: [...participantsList],
    }
    console.error("paramsparams", params);
    this.VdkCallService.Call(params);
  }

  startM2MVideoCall() {
    if (this.inCall()) return;
    this.screen = 'MAIN';
    this.groupOutgoingVideoCall = true;
    this.calling.templateName = 'groupVideoCall';
    this.calling['callerName'] = this.activeChat.chatTitle;
    this.changeDetector.detectChanges();
    const p = this.activeChat['participants'].filter(g => g.ref_id != this.currentUserName).map(g => g.ref_id);
    const params = {
      call_type: "video",
      localVideo: document.getElementById("localVideo"),
      to: [...p],
    }
    console.error("paramsparams", params);
    this.m2mCallService.groupCall(params);
  }

  acceptcall() {
    console.error("this.calling", this.calling);
    if (this.calling.session == 'one_to_one') {
      this.acceptOne2oneCall();
    } else {
      this.acceptM2MCall();
    }
  }

  acceptOne2oneCall() {
    this.VdkCallService.acceptCall(document.getElementById("localVideo"), document.getElementById("remoteVideo"));
    this.changeDetector.detectChanges();
    this.calling.templateName = this.calling.call_type == 'video' ? 'VideoCallInProgress' : 'AudioCallInProgress';
    this.startWatch();
    this.changeDetector.detectChanges();
  }

  acceptM2MCall() {
    if (this.isM2MProgressCall()) return;
    this.calling.templateName = this.calling.call_type == 'video' ? 'groupVideoCall' : 'groupOngoingAudioCall';
    this.changeDetector.detectChanges();
    const params = {
      localVideo: document.getElementById("localVideo"),
      call_type: this.calling.call_type
    }
    this.changeDetector.detectChanges();
    this.groupOutgoingVideoCall = false;
    this.m2mCallService.joinGroupCall(params);
    this.changeDetector.detectChanges();
  }

  startWatch() {
    if (!this.callTime) {
      this.countDownTime = timer(0, 1000).subscribe(() => ++this.callTime);
    }
  }


  startAudioCall() {
    if (this.activeChat.auto_created) {
      this.startone2oneAudioCall();
    } else {
      this.startm2mAudioCall();
    }
  }

  startone2oneAudioCall() {
    if (this.inCall()) return;
    this.calling.session = 'one_to_one';
    this.calling.call_type = 'audio';
    this.screen = 'MAIN';
    this.calling.templateName = 'outgoingAudioCall';
    this.calling.callerName = this.activeChat.chatTitle;
    const participantsList = this.activeChat['participants'].filter(g => g.ref_id != this.currentUserName).map(g => g.ref_id);
    const params = {
      localVideo: document.getElementById("localVideo"),
      remoteVideo: document.getElementById("remoteVideo"),
      to: [...participantsList],
    }
    console.error(params);
    this.VdkCallService.audioCall(params);
  }

  startm2mAudioCall() {
    if (this.inCall()) return;
    this.calling.call_type = 'audio';
    this.screen = 'MAIN';
    this.calling.templateName = 'groupOutgoingAudioCall';
    this.calling['callerName'] = this.activeChat.chatTitle;
    const participants = this.activeChat['participants'].filter(g => g.ref_id != this.currentUserName).map(g => g.ref_id);
    const params = {
      call_type: "audio",
      localVideo: document.getElementById("localAudio"),
      to: [...participants],
    }
    this.m2mCallService.groupCall(params);
  }

  changeSettings(filed) {
    if (this.calling.session == 'one_to_one') {
      this.changeOne2OneSettings(filed);
    } else {
      this.changeM2MSettings(filed);
    }

  }

  changeOne2OneSettings(filed) {
    this.settings[filed] = !this.settings[filed];
    switch (filed) {
      case 'isOnInProgressCamara':
        this.settings[filed] ? this.VdkCallService.setCameraOn() : this.VdkCallService.setCameraOff();
        const displaystyle = this.settings[filed] ? 'block' : 'none';
        if (document.getElementById('OutgoingVideo')) document.getElementById('OutgoingVideo').style.display = displaystyle;
        break;
      case 'isOnInProgressMicrophone':
        this.settings[filed] ? this.VdkCallService.setMicUnmute() : this.VdkCallService.setMicMute();
        const enabled = this.settings[filed];
        const audiotrack: any = (<HTMLInputElement>document.getElementById("localAudio"));
        if (audiotrack && audiotrack.audioTracks) {
          audiotrack.audioTracks[0].enabled = enabled;
        }
        break;
    }
  }

  changeM2MSettings(filed) {
    this.settings[filed] = !this.settings[filed];
    switch (filed) {
      case 'isOnInProgressCamara':
        this.settings[filed] ? this.m2mCallService.setCameraOn() : this.m2mCallService.setCameraOff();
        const displaystyle = this.settings[filed] ? 'block' : 'none';
        const displayNamestyle = this.settings[filed] ? 'none' : 'block';
        document.getElementById('localVideo').style.display = displaystyle;
        document.getElementById('localNameHolder').style.display = displayNamestyle;
        break;
      case 'isOnInProgressMicrophone':
        this.settings[filed] ? this.m2mCallService.setMicUnmute() : this.m2mCallService.setMicMute();
        const enabled = this.settings[filed];
        const audiotrack: any = (<HTMLInputElement>document.getElementById("localAudio"));
        if (audiotrack && audiotrack.audioTracks) {
          audiotrack.audioTracks[0].enabled = enabled;
        }
        break;
    }
  }

  isShowRemoteVideo(): boolean {
    return this.calling.templateName != 'VideoCallInProgress' && this.calling.call_type != 'video';
  }

  isHideLocalVideo(): boolean {
    const ishide = !(this.calling.templateName == 'VideoCallInProgress' || this.calling.templateName == 'outgoingVideoCall');
    return ishide;
  }

  isShowOne2oneCall() {
    const one2onetemplateList = `noCall,incommingAudioCall,outgoingAudioCall,
    AudioCallInProgress,incommingVideoCall,outgoingVideoCall,VideoCallInProgress`
    return one2onetemplateList.includes(this.calling.templateName);
  }

  isShowM2MCall() {
    const one2onetemplateList = `groupIncommingAudioCall,groupOutgoingAudioCall,groupOngoingAudioCall,
    groupIncommingVideoCall,groupVideoCall`;
    return one2onetemplateList.includes(this.calling.templateName);
  }

  isM2MProgressCall() {
    return this.calling.templateName == 'groupVideoCall' || this.calling.templateName == 'groupOngoingAudioCall';
  }

}