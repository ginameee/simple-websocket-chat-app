import { Injectable } from "@angular/core";
import { Msg } from "../../mocks/msg";
import { UserInfoService } from "../user-info/user-info.service";
import { Observable, Observer } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  private url = "ws://localhost:5000";
  private ws: WebSocket;

  connect(): Observable<any> {
    this.ws = new WebSocket(this.url);

    const observable = new Observable(observer => {
      this.initSocket(observer);
    });

    return observable;
  }

  initSocket(observer: Observer<any>): void {
    this.ws.onopen = e => {
      this.ws.send(
        JSON.stringify({
          type: "name",
          data: this.userInfoService.id
        })
      );

      this.ws.send(
        JSON.stringify({
          type: "message",
          data: "Hello !!! everyone!!!"
        })
      );

      observer.next(new Msg("System", "Socket connected successfully"));
    };

    this.ws.onmessage = e => {
      const res = JSON.parse(e.data);

      console.log(res);
      const user = res.name;
      const content = res.data;

      observer.next(new Msg(user, content));
    };

    this.ws.onerror = e => {
      observer.error(e);
    };
  }

  send(msg): Observable<any> {
    const observable = new Observable(observer => {
      this.ws.send(
        JSON.stringify({
          type: "message",
          data: msg
        })
      );
    });

    return observable;
  }

  constructor(private userInfoService: UserInfoService) {}
}
