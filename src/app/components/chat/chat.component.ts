import { ChangeDetectorRef, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
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
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import FormsHandler from 'src/app/shared/FormsHandler/FormsHandler';
import { MessageModel, onlineOfflineModel, receiptModel, typingModel } from 'src/app/shared/models/chat';
import {from, Subscription, timer} from 'rxjs';
import { VdkM2MCallService } from 'src/app/shared/services/vdk-m2m-call.service';
import { VdkOne2OneCallService } from 'src/app/shared/services/vdk-one2one-call.service';
import {
  EventEmitter,
  Output,
} from "@angular/core";
@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @ViewChild('noCall') noCall: TemplateRef<any>;
  @ViewChild('chatDuringCall') chatDuringCall: TemplateRef<any>;
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

  @Output() setActiveChatt = new EventEmitter<string>();
  @Output() changeEvent = new EventEmitter<string>();


  ongoingCall = false;
  editGroupModel = false;
  groupForm: UntypedFormGroup;
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
  showChat: true;
  callTime = 0;
  groupOutgoingVideoCall = false;
  calling = {
    participant: [],
    callType: 'video',
    templateName: 'noCall',
    callerName: '',
    from: "",
    session: "",
    uuid:""
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
    public vdkOne2OneCallSVC: VdkOne2OneCallService,
    public vdkM2MCallSVC: VdkM2MCallService,
    private svc: BaseService,
    private router: Router,
    private elRef: ElementRef,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private changeDetector: ChangeDetectorRef,
    private _fb: UntypedFormBuilder
  ) {
    this.groupForm = this._fb.group({
      'group_id': new UntypedFormControl('', [Validators.required]),
      'group_title': new UntypedFormControl('', [Validators.required, Validators.maxLength(100)]),
    }, { updateOn: 'change' });
    this.pubsubService.initConfigure();
    this.vdkOne2OneCallSVC.initConfigure();
    // this.vdkM2MCallSVC.initConfigure();
  }

  ngOnInit() {
    this.pubsubService.Client.on("connect", response => {
      console.log("connect", response);
      this.sdkconnected = true;
      if (!this.AllGroups.length) {
        this.getAllGroups();
      }
    });

    this.pubsubService.Client.on("disconnect", (response) => {
      console.log("disconnect", response);
      this.sdkconnected = false;
    });

    this.vdkOne2OneCallSVC.Client.on("register", response => {
      console.log("register response", response);
    });

    this.vdkOne2OneCallSVC.Client.on("connected", response => {
      this.sdkconnected = true;
      console.log("connected response", response);
    });

    this.vdkOne2OneCallSVC.Client.on("call", response => {

      console.log("call response", response) ;
      console.log("ongoing call" , this.ongoingCall);

      switch (response.type) {
        case "CALL_RECEIVED":
          if(this.ongoingCall){
            this.vdkOne2OneCallSVC.rejectCall(response.from , false);
            return;
          }
          this.calling.session = response.session;
          this.calling.from = response.from;
          this.changeDetector.detectChanges();
          const full_name = this.findUserName(response.from);
          this.calling.callerName = full_name;
          this.calling.templateName = response.callType == 'video' ? 'incommingVideoCall' : 'incommingAudioCall';
          this.calling.callType = response.callType;
          this.calling.uuid = response.uuid;
          this.changeDetector.detectChanges();
          this.screen = 'MAIN';
          break;
        case "CALL_ENDED":
          this.ongoingCall = false;
          this.resetCall();
          break;
        case "MISSED_CALL":
          this.resetCall();
          this.toastr.error('You have Missed Call', 'Opps!')
          break;
        case "CALL_REJECTED":
          this.ongoingCall = false
          this.resetCall();
          this.toastr.error('User is busy', "Opps!");
          break;
        case "CALL_ACCEPTED":
          if (response.to) {
            this.changeDetector.detectChanges();
            this.calling.templateName = this.calling.callType == 'video' ? 'VideoCallInProgress' : 'AudioCallInProgress';
            this.startWatch();
            this.changeDetector.detectChanges();
          }

          break;
        case "CALL_STATUS":
          const displaystyle = response.video_status ? 'block' : 'none';
          const callerHolderstyle = response.video_status ? 'none' : 'block';
          if (document.getElementById('remoteVideo')) document.getElementById('remoteVideo').style.display = displaystyle;
          if (document.getElementById('callerHolder')) document.getElementById('callerHolder').style.display = callerHolderstyle;
          break;
        case "REMOTE_STREAM":
          this.addParticipant(response, 1);
          break;
      }
    });

    // this.vdkM2MCallSVC.Client.on("connected", responses => {
    //   console.error("m2m connected response", response);
    // });

    this.vdkOne2OneCallSVC.Client.on("groupCall", response => {
      console.log("groupCall response", response);
      switch (response.type) {

        case "CALL_RECEIVED":
          this.screen = 'MAIN'
          this.calling.callerName = this.findUserName(response.from);
          this.calling.templateName = response.callType == 'video' ? 'groupIncommingVideoCall' : 'groupIncommingAudioCall';
          this.calling.callType = response.callType;
          this.calling.uuid = response.uuid;
          this.changeDetector.detectChanges();
          break;
        case "NEW_PARTICIPANT":
          this.addParticipant(response);
          break;
        case "PARTICIPANT_LEFT":
          document.getElementById("sendInputContainer").style.display = 'flex';
          document.getElementById('roomNameText').style.display = "block";
          document.getElementById('appendChatDuringCall').style.display = "none";
          document.getElementById('returnedtocall').style.display = "none";
          this.removeParticipant(response);
          break;
        case "CALL_STARTED":
          this.startWatch();
          break;
        case "PARTICIPANT_STATUS":
          const displaystyle = response.video_status ? 'block' : 'none';
          if (document.getElementById(response.participant)) document.getElementById(response.participant).style.display = displaystyle;
          break;
      }
    });
  }
  chatDCall()
  {
    return true;
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
    this.pubsubService.Client.on("subscribed", response => {
      console.log("subscribed", response);
      this.setOnlineStatusforSubscribe(response);
    });

    this.pubsubService.Client.on("message", response => {
      console.log("$$$$ ** on-message response: \n\n", response);
      response = JSON.parse(JSON.stringify(response));
      //console.trace("new message", response);
      if (response.data) {
        this.updateGroup(response);
      } 
      if (response.type == 'text' || response.type == 'file' || response.type == 'image' || response.type == 'audio' || response.type == 'video') {
        console.log("$$$$ msg ni show horA: ", this);
        
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

  updateGroup(grp_info) {
    let new_group = grp_info.data.groupModel.group;
    console.log("$$$$ in update group function \n\n", {grp_info}, {new_group});

    // return;
    if(grp_info.data.action == "new") {
      let i = this.AllGroups.findIndex((grp)=> grp.channel_name == new_group.channel_name);

      if (i === -1) {
        let chat = grp_info.data.groupModel.group;
        let subscribedata = {
          key: chat.channel_key,
          channel: chat.channel_name,
        };
        let data = [];
        data.push(subscribedata);
        this.pubsubService.subscribeToChat(data);
        console.log("!!!!!! grp", subscribedata);

        //this.pubsubService.subscribeToChat(data);
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
        console.log("!!! final grp before pushing: \n\n",this,"\n", chat, "\n\n" ,this.AllGroups);
      
        this.AllGroups.push(chat);
        // this.setActiveChat(chat);
        this.changeEvent.emit("THREAD");
        //chat.clicked_item = "chat";
        this.setActiveChatt.emit(chat);
        this.loading = false;

        // console.log("** group added successfully\n", grp_info, "\n");  //{new_group}, {index}, this.AllGroups
      }
         
    }


    if(grp_info.data.action == "delete") {
      //console.log("$$ group deleted successfully-before\n" , this.AllGroups);
      // let cn = grp_info.data.groupModel;
      let index = this.AllGroups.findIndex((grp)=> grp.channel_name == new_group.channel_name);
      if(index > -1) {
        this.AllGroups.splice(index, 1);
        this.pubsubService.unsubscribeToChat({key: new_group.channel_key, channel: new_group.channel_name});
        this.activeChat = {};
        this.changeDetector.detectChanges();
      }
      console.log("1234** group deleted successfully\n", grp_info,  "\n", this.activeChat, this.loading, !this.activeChat.chatTitle && !this.loading);  //{new_group}, {index}, this.AllGroups
    }


    if(grp_info.data.action == "modify") {
      let grp_ind = this.AllGroups.findIndex((g)=> g.channel_name === g.channel_name);  
      // console.log("*** edit notification:\n", new_group, "\n", this.AllGroups, "\n");
      if(grp_ind > -1) {
        this.AllGroups[grp_ind].group_title = new_group.group_title;
        this.AllGroups[grp_ind].chatTitle = new_group.group_title; 
        //console.log("*** edit notification:\n", new_group, "\n", this.AllGroups, "\n",new_group.group.group_title);
      }
      
    }
    
    

  }

  //** */
  editGroup() {
    FormsHandler.validateForm(this.groupForm);
    console.log("this.groupForm.", this.groupForm.invalid);
    if (this.groupForm.invalid || this.loading) return;
    const playload = this.groupForm.value;
    this.loading = true;
    this.svc.post('RenameGroup', playload).subscribe(v => {
      
      if (v && v.status == 200) {
        //this.getAllGroups(); //Commented this on 22-May-23 because chat history removed when rename group called

        if(this.activeChat.group_id === playload.group_id && this.activeChat.auto_created === 0) {
          console.log("&& rename group api calleds", this.activeChat, playload);
          this.activeChat.group_title = playload.group_title;
          this.activeChat.chatTitle = playload.group_title;
        }



        //ABM
        let participants_ref_ids = [];
        v.group.participants.map((p) => {
          participants_ref_ids.push(p.ref_id);
        });
        const groupInfo = {
          from: StorageService.getUserData().ref_id,
          to: participants_ref_ids,
          action: "modify",
          groupModel: v
          
        };
        console.log("TT *** edit grppp  -sending side:\n", groupInfo, "/nAPI response:", v);
        this.pubsubService.sendNotificationOnGroupUpdation(groupInfo);
        //ABM

        this.editGroupModel = false;
        this.loading = false;
        this.toastr.success('The group has been updated!', 'Success!');
      }
    });
  }

  //** */
  deleteGroup(group) {
    this.loading = true;
    const playload = {
      group_id: group.id
    }
    this.svc.post('DeleteGroup', playload).subscribe(v => {
      this.changeDetector.detectChanges();
      if (v && v.status == 200) {
        this.loading = false;
        //AMB
        let participants_ref_ids = [];
        group.participants.map((p) => {
          participants_ref_ids.push(p.ref_id);
        });
        const groupInfo = {
          from: StorageService.getUserData().ref_id,
          to: participants_ref_ids,
          action: "delete",
          groupModel: v
        };
        //console.log("TT ** delete group: ", groupInfo, group);
        this.pubsubService.sendNotificationOnGroupUpdation(groupInfo);
        //ABM


        this.getAllGroups();
        this.activeChat = {};
        this.loading = false;
        this.toastr.success('The group has been deleted!', 'Success!');
      } else {
        console.error(v.message);
        alert(v.message);
        this.changeDetector.detectChanges();
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





        console.log("this.activeChat.chatTitle", this.activeChat);
        if (!this.activeChat.chatTitle) {
          this.activeChat = this.AllGroups.length ? this.AllGroups['0'] : {};
        }
        if (this.setToActive) {
          const indexchat = this.AllGroups.find(group => group.id == this.setToActive)
          this.activeChat = indexchat ? indexchat : this.AllGroups['0'];
          this.setToActive = null;
        }
        this.isActiveThread = true;
        console.log("this.activeChat.chatTitle", this.activeChat);
        this.pubsubService.subscribeToChat(this.AllGroups);
      }
      setTimeout(() => {
        this.sortThread();
      }, 500);
      this.changeDetector.detectChanges();
    });
  }


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
    console.log("clicke");
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


  setChatDuringCall(){
    console.log("active chat" , this.activeChat);
    document.getElementById("returnedtocall").style.display = 'flex';
    document.getElementById('messagesBox').style.display = 'none';
    document.getElementById('appendChatDuringCall').style.display = "block";
    let el = document.getElementById("sendInputContainer");
    el.removeAttribute('hidden');
    document.getElementById("sendInputContainer").style.display = 'flex';
    document.getElementById('roomNameText').style.display = "block";
  }


  returntoCall(){
    document.getElementById('appendChatDuringCall').style.display = "none";
    document.getElementById('returnedtocall').style.display = "none";
    document.getElementById('messagesBox').style.display = 'block';
    document.getElementById('roomNameText').style.display = "none";
    document.getElementById("sendInputContainer").style.display = 'none';
  }


  setchat(chat) {
    
    this.setActiveChat(chat);
    this.setToActive = chat.id;
    if(chat.clicked_item == "audio"){
      this.startone2oneAudioCall();
    }
    if(chat.clicked_item == "video"){
      this.startOne2OneVideoCall();
    }
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
      console.log("file to send", this.fileToSend);
      const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
      let base64 = toBase64(this.fileToSend);
      console.log("base64444", base64);
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


  findUserName(ref_id: string): string {
    const user = FindArrayObject(this.CopyAllUsers, 'ref_id', ref_id);
    return user ? user.full_name : '';
  }


  resetCall() {
    document.getElementById("sendInputContainer").style.display = 'flex';
    document.getElementById('roomNameText').style.display = "block";
    document.getElementById('appendChatDuringCall').style.display = "none";
    document.getElementById('returnedtocall').style.display = "none";

    this.settings = {
      isOnInProgressCamara: true,
      isOnInProgressMicrophone: true
    }
    this.calling = {
      participant: [],
      callType: 'video',
      templateName: 'noCall',
      callerName: '',
      from: "",
      session: "",
      uuid:""
    }
    this.callTime = 0;
    this.screen = 'LISTING';
    if (this.countDownTime) {
      this.countDownTime.unsubscribe()
    }
    if (document.getElementById('OutgoingVideo')) document.getElementById('OutgoingVideo').style.display = 'block';
    this.changeDetector.detectChanges();
    this.ongoingCall = false;
  }
  stopCall() {
    document.getElementById("sendInputContainer").style.display = 'flex';
    document.getElementById('roomNameText').style.display = "block";
    document.getElementById('appendChatDuringCall').style.display = "none";
    document.getElementById('returnedtocall').style.display = "none";
    this.ongoingCall = false;
    this.calling.templateName = 'noCall';
    this.vdkOne2OneCallSVC.endCall();
    this.vdkOne2OneCallSVC.leaveGroupCall();
    this.resetCall();
    this.changeDetector.detectChanges();
    console.log("stopCall");
  }

  inCall(): boolean {
    return this.calling.templateName != 'noCall';
  }
  startVideoCall() {
    this.resetCall();
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
    this.startWatch();
    this.screen = 'MAIN';
    this.ongoingCall = true;
    this.calling.templateName = 'outgoingVideoCall';
    // this.calling['callerName'] = this.activeChat.chatTitle;
    this.calling.callerName = this.activeChat.chatTitle ? this.activeChat.chatTitle : this.activeChat.group_title;

    this.changeDetector.detectChanges();
    const participantsList = this.activeChat.participants.filter(g => g.ref_id != this.currentUserName).map(g => g.ref_id);
    const params = {
      localVideo: document.getElementById("localVideo"),
      remoteVideo: document.getElementById("remoteVideo"),
      to: [...participantsList],
      audio:1,
      video:1
    }
    this.vdkOne2OneCallSVC.Call(params).then(uuid => {
      this.calling.uuid = uuid;
    });
  }

  startM2MVideoCall() {
    if (this.inCall()) return;
    const p = this.getChatParticipants();
    if (!p.length) {
      this.toastr.error('Please select someone to call!', 'Opps!')
      return;
    }
    this.ongoingCall = true;
    this.screen = 'MAIN';
    this.groupOutgoingVideoCall = true;
    this.calling.templateName = 'groupVideoCall';
    this.calling['callerName'] = this.activeChat.chatTitle;
    this.changeDetector.detectChanges();
    const params = {
      callType: "video",
      localVideo: document.getElementById("localVideo"),
      to: [...p],
      video:1,
      audio:1,
      //timeout: 40,
      isPeer: 0
    }
    this.vdkOne2OneCallSVC.groupCall(params).then(uuid => {
      this.calling.uuid = uuid;
    });
  }

  acceptcall() {
    console.log("acceptcall");
    if (this.calling.session == 'one_to_one') {
      console.log("acceptcall one_to_one");
      this.acceptOne2oneCall();
    } else {
      console.log("acceptcall acceptM2MCall");
      this.acceptM2MCall();
    }
  }

  acceptOne2oneCall() {
    this.vdkOne2OneCallSVC.acceptCall(
      {
        localVideo: document.getElementById("localVideo"),
        remoteVideo: document.getElementById("remoteVideo"),
        sessionUUID:this.calling.uuid,
        audio:1,
        video:this.calling.callType == 'video'
      });
    this.changeDetector.detectChanges();
    this.calling.templateName = this.calling.callType == 'video' ? 'VideoCallInProgress' : 'AudioCallInProgress';
    this.startWatch();
    this.ongoingCall = true;
    this.changeDetector.detectChanges();
  }

  acceptM2MCall() {
    if (this.isM2MProgressCall()) return;
    this.ongoingCall = true;
    this.calling.templateName = this.calling.callType == 'video' ? 'groupVideoCall' : 'groupOngoingAudioCall';
    this.changeDetector.detectChanges();
    const params = {
      localVideo: document.getElementById("localVideo"),
      callType: this.calling.callType
    }
    this.startWatch();
    this.changeDetector.detectChanges();
    this.groupOutgoingVideoCall = false;
    this.vdkOne2OneCallSVC.joinGroupCall(params);
    this.changeDetector.detectChanges();
  }

  startWatch() {
    //console.trace()
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
    const participantsList = this.getChatParticipants();
    if (!participantsList.length) {
      this.toastr.error('Please select someone to call!', 'Opps!')
      return;
    }
    this.calling.session = 'one_to_one';
    this.calling.callType = 'audio';
    this.ongoingCall = true;
    this.screen = 'MAIN';
    this.calling.templateName = 'outgoingAudioCall';
    this.calling.callerName = this.activeChat.chatTitle ? this.activeChat.chatTitle : this.activeChat.group_title;

    const params = {
      localVideo: document.getElementById("localVideo"),
      remoteVideo: document.getElementById("remoteVideo"),
      to: [...participantsList],
      data: { calleName: this.currentUserData.full_name }
    }
    this.vdkOne2OneCallSVC.audioCall(params).then(uuid => {
      this.calling.uuid = uuid;
    });
  }

  startm2mAudioCall() {
    if (this.inCall()) return;
    const participants = this.getChatParticipants();
    if (!participants.length) {
      this.toastr.error('Please select someone to call!', 'Opps!')
      return;
    }
    this.calling.callType = 'audio';
    this.ongoingCall = true;
    this.screen = 'MAIN';
    this.calling.templateName = 'groupOutgoingAudioCall';
    this.calling['callerName'] = this.activeChat.chatTitle;

    const params = {
      callType: "audio",
      localVideo: document.getElementById("localAudio"),
      to: [...participants],
      video:0,
      audio:1,
      timeout: 40,
      isPeer: 0
    }
    this.vdkOne2OneCallSVC.groupCall(params).then(uuid => {
      this.calling.uuid = uuid;
    });
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
        this.settings[filed] ? this.vdkOne2OneCallSVC.setCameraOn(this.calling.uuid) : this.vdkOne2OneCallSVC.setCameraOff(this.calling.uuid);
        const displaystyle = this.settings[filed] ? 'block' : 'none';
        if (document.getElementById('OutgoingVideo')) document.getElementById('OutgoingVideo').style.display = displaystyle;
        break;
      case 'isOnInProgressMicrophone':
        this.settings[filed] ? this.vdkOne2OneCallSVC.setMicUnmute(this.calling.uuid) : this.vdkOne2OneCallSVC.setMicMute(this.calling.uuid);
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
        this.settings[filed] ? this.vdkOne2OneCallSVC.setCameraOn(this.calling.uuid) : this.vdkOne2OneCallSVC.setCameraOff(this.calling.uuid);
        const displaystyle = this.settings[filed] ? 'block' : 'none';
        const displayNamestyle = this.settings[filed] ? 'none' : 'block';
        document.getElementById('localVideo').style.display = displaystyle;
        document.getElementById('localNameHolder').style.display = displayNamestyle;
        break;
      case 'isOnInProgressMicrophone':
        this.settings[filed] ? this.vdkOne2OneCallSVC.setMicUnmute(this.calling.uuid) : this.vdkOne2OneCallSVC.setMicMute(this.calling.uuid);
        const enabled = this.settings[filed];
        const audiotrack: any = (<HTMLInputElement>document.getElementById("localAudio"));
        if (audiotrack && audiotrack.audioTracks) {
          audiotrack.audioTracks[0].enabled = enabled;
        }
        break;
    }
  }

  isShowRemoteVideo(): boolean {
    return this.calling.templateName != 'VideoCallInProgress' && this.calling.callType != 'video';
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

  addParticipant(response, fromRemoteStream = 0) {
    this.calling.templateName = this.calling.callType == 'video' ? 'groupVideoCall' : 'groupOngoingAudioCall';
    this.groupOutgoingVideoCall = false;
    const user = this.AllUsers.find(user => user.ref_id == response.participant);
    if(!this.calling.participant.includes(user))
    {
      this.calling.participant.push(user);
    }
    this.changeDetector.detectChanges();
    setTimeout(() => {
      this.changeDetector.detectChanges();
      const user = this.findUserName(response.participant);
      const textmsg = user + ' ' + 'has joined';
      this.toastr.success(textmsg);
      if(fromRemoteStream)
      {//Peer to Peer Call
        let video:any = document.getElementById(response.participant);
        if(video)
        {
          video.srcObject = response.stream[response.participant].stream[0];
        }
        else
        {
          console.error("Video Element not found to set remote stream for", response.participant)
        }
      }
       else
      {
        //Media server call
        this.vdkOne2OneCallSVC.setParticipantVideo(response.participant, document.getElementById(response.participant));
      }
    });
    this.changeDetector.detectChanges();
  }


  removeParticipant(response) {
    //this.ongoingCall = false;
    const index = this.calling.participant.findIndex(user => user.ref_id == response.participant);
    if (index >= 0) {
      const user = this.findUserName(response.participant);
      if (user) {
        const textmsg = user + ' ' + 'has left';
        this.toastr.success(textmsg);
      }
      this.calling.participant.splice(index, 1);
      if (!this.calling.participant.length) {
        this.resetCall();
      }
    }

    this.changeDetector.detectChanges();
  }
  private getChatParticipants() {
    let participants = [];
    if (this.activeChat && this.activeChat['participants'] && this.activeChat['participants'].length) {
      participants = this.activeChat['participants'].filter(g => g.ref_id != this.currentUserName).map(g => g.ref_id);
    }
    return participants;
  }
}
