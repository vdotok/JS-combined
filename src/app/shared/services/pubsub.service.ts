import { Injectable, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from './storage.service';
declare const MVDOTOK: any;

@Injectable()
export class PubsubService implements OnDestroy {
  @Output()
  protected wsSubscription: Subscription;
  public Client: any;

  constructor() { }

  public ngOnDestroy(): void {
    this.wsSubscription.unsubscribe();
  }

  public initConfigure(): void {
    this.Client = new MVDOTOK.Client({
      projectID: "15Q89R",
      secret: "3d9686b635b15b5bc2d19800407609fa",
    });
    this.Client.on("authenticated", (res) => {
      let user = StorageService.getUserData();
      console.log("====authenticated", user.ref_id.toString(), user.authorization_token.toString());
      this.Client.Register(user.ref_id.toString(), user.authorization_token.toString());

    });
  }

  public sendMessage(message): void {
    this.Client.SendMessage(message);
  }

  public subscribeToChat(groups): void {
    groups.map(chanelObj => {
      this.Client.Subscribe(chanelObj);
    });
  }


  public unsubscribeToChat(groups): void {
    this.Client.UnSubscribe(groups);
  }

  public Disconnect(): void {
    this.Client.Disconnect();
  }

  readMessage(chatMessages) {
    chatMessages.map(chat => {
      this.Client.SendReceipt(chat);
    });
  }

  readSingleMessage(chatMessages) {
    this.Client.SendReceipt(chatMessages);
  }

}
