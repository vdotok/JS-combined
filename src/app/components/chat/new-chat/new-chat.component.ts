import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { map } from 'rxjs/internal/operators/map';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { BaseService } from 'src/app/shared/services/base.service';
import { PubsubService } from 'src/app/shared/services/pubsub.service';
import { ToastrService } from 'ngx-toastr';
import { startWith } from 'rxjs/operators';
import { of } from 'rxjs';
import {ChatComponent} from '../chat.component';

@Component({
  selector: 'new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.scss']
})
export class NewChatComponent implements OnInit {
  loading = true;
  AllUsers = [];
  CopyAllUsers = [];
  @Output() changeEvent = new EventEmitter<string>();
  @ViewChild('searchInput') searchInput: ElementRef;
  @Output() setActiveChat = new EventEmitter<string>();


  constructor(
    public pubsubService: PubsubService,
    private svc: BaseService,
    public dialog: MatDialog,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    
    if (this.searchInput) {
      fromEvent(this.searchInput.nativeElement, 'input')
        .pipe(
          map((event: Event) => (event.target as HTMLInputElement).value),
          debounceTime(1000),
          distinctUntilChanged(),
          startWith(''),
          mergeMap(value => {
            this.loading = true;
            if (!value) {
              const data = {
                sorting: "ORDER BY full_name ASC",
                search_field: "full_name",
                search_value: '',
                condition: "contains",
              }
              return this.svc.post('AllUsers', data).pipe(map(res => {
                if(!(res.users && res.users.length))
                {
                  res.users = [];
                }
                this.CopyAllUsers = [...res.users];
                return res;
              }))
            }
            const temparaay = [...this.CopyAllUsers];
            const filteruser = temparaay.filter(user => {
              let searchValue = value.toLowerCase();
              if (user.full_name.toLowerCase().startsWith(searchValue)) { return -1; }
            });
            const returnData = {
              users: filteruser
            }
            return of(returnData)
          })
        )
        .subscribe(res => {
          this.loading = false;
          if (!res.users || !res.users.length) {
            this.toastr.error("No contacts found", "Opps!");
            this.AllUsers = [];
          } else {
            this.AllUsers = res.users;
          }
        })
    }
  }


  backScreen() {
    this.changeEvent.emit("THREAD");
  }

  addGroupEvent() {
    this.changeEvent.emit("GROUP");
  }

  startChat(user , val ) {
    if (this.loading) return;
    this.loading = true;
    let data = {
      group_title: user.full_name,
      participants: [user.user_id],
      auto_created: 1
    }
    this.svc.post('CreateGroup', data).subscribe(v => {
      if (v && v.status == 200) {
        let subscribedata = {
          ...v.group,
          key: v.group['channel_key'],
          channel: v.group['channel_name'],
        };
        let data = [];
        data.push(subscribedata)
        this.pubsubService.subscribeToChat(data);
        this.changeEvent.emit("THREAD");
        v.group.clicked_item = val;
        this.setActiveChat.emit(v.group);
        this.loading = false;
      }
    });
  }
  

}
