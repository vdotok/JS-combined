import { Injectable, Output } from '@angular/core';
import { StorageService } from './storage.service';
declare const CVDOTOK: any;

@Injectable()
export class VdkM2MCallService {
  @Output() public Client: any;
  constructor() { }

  public initConfigure(): void {
    this.Client = new CVDOTOK.ManyToMany({
      projectId: "1RN1RP",
      secret: "3d9686b635b15b5bc2d19800407609fa",
    });
    this.Client.on("connected", (res) => {
      let user = StorageService.getUserData();
      this.Client.Register(
        user.ref_id.toString(),
        user.authorization_token.toString()
      );
    });
  }

  groupCall(params): void {
    return this.Client.GroupCall(params);
  }

  joinGroupCall(params): void {
    return this.Client.JoinGroupCall(params);
  }

  leaveGroupCall(): void {
    this.Client.LeaveGroupCall();
  }

  setCameraOn(uuid): void {
    this.Client.SetCameraOn(uuid);
  }

  setCameraOff(uuid): void {
    this.Client.SetCameraOff(uuid);
  }

  setMicMute(uuid): void {
    this.Client.SetMicMute(uuid);
  }

  setMicUnmute(uuid): void {
    this.Client.SetMicUnmute(uuid);
  }

  setParticipantVideo(participant, vidio) {
    this.Client.SetParticipantVideo(participant, vidio);
  }

}
