import { Injectable, Output } from '@angular/core';
import { StorageService } from './storage.service';
declare const CVDOTOK: any;

@Injectable()
export class VdkOne2OneCallService {
  @Output() public Client: any;

  constructor() { }
  public initConfigure(): void {
    const user = StorageService.getUserData();
    this.Client = new CVDOTOK.Client({
      projectId: "1RN1RP",//115G1WZI",
      host: `wss://r-stun2.vdotok.dev:8443/call`,
      stunServer: `${user.stun_server_map.complete_address}`
    });
    this.Client.on("connected", (res) => {
      let user = StorageService.getUserData();
      this.Client.Register(
        user.ref_id.toString(),
        user.authorization_token.toString()
      );
    });
  }

  public Disconnect(): void {
    // this.Client.Disconnect();
  }

  Call(params): void {
    this.Client.Call(params);
  }

  audioCall(params): void {
    this.Client.AudioCall(params);
  }

  acceptCall(params): void {
    this.Client.AcceptCall(params);
  }

  rejectCall(from , val): void {
    this.Client.RejectCall(from , val);
  }

  endCall(): void {
    this.Client.EndCall();
  }


  cancelCall(): void {
    this.Client.CancelCall();
  }

  setCameraOn(): void {
    this.Client.SetCameraOn();
  }

  setCameraOff(): void {
    this.Client.SetCameraOff();
  }

  setMicMute(): void {
    this.Client.SetMicMute();
  }

  setMicUnmute(): void {
    this.Client.SetMicUnmute();
  }


  groupCall(params): void {
    this.Client.GroupCall(params);
  }

  joinGroupCall(params): void {
    this.Client.JoinGroupCall(params);
  }

  leaveGroupCall(): void {
    this.Client.LeaveGroupCall();
  }

  setParticipantVideo(participant, vidio) {
    this.Client.SetParticipantVideo(participant, vidio);
  }

}
