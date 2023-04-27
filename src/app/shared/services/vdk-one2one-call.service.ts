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
      projectId: "1RN1RP",
      host: `${user.media_server_map.complete_address}`,
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

  Call(params): Promise<any> {
    return this.Client.Call(params);
  }

  audioCall(params): Promise<any> {
    return this.Client.AudioCall(params);
  }

  acceptCall(params): void {
    return this.Client.AcceptCall(params);
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


  groupCall(params): Promise<any> {
    return this.Client.GroupCall(params);
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
