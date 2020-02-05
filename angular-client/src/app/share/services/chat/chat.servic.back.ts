import { Injectable } from "@angular/core";
import * as io from "socket.io-client";
import { Observable } from "rxjs";
import { Msg } from "../../mocks/msg";
import { UserInfoService } from "../user-info/user-info.service";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  private url = "ws://localhost:5000";
  private socket;

  constructor(private userInfoService: UserInfoService) {}

  listen(eventName: string) {}

  getMsgs(): Observable<Msg> {
    const observable = new Observable<Msg>(observer => {
      this.socket = io(this.url);

      this.socket.on("message", data => {
        observer.next(data);
      });

      return () => {};
    });

    return observable;
  }

  sendMsg(msg: string) {
    this.socket.emit(
      "add-message",
      JSON.stringify({
        id: this.userInfoService.id,
        pw: this.userInfoService.pw
      })
    );
  }

  endChat() {
    this.socket.disconnect();
  }
}
