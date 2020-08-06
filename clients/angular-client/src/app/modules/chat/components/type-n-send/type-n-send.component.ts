import { Component, OnInit } from "@angular/core";
import { ChatService } from "src/app/share/services/chat/chat.service";

@Component({
  selector: "app-type-n-send",
  templateUrl: "./type-n-send.component.html",
  styleUrls: ["./type-n-send.component.scss"]
})
export class TypeNSendComponent implements OnInit {
  msg = "";

  constructor(private chatService: ChatService) {}

  ngOnInit() {}

  send() {
    this.chatService.send(this.msg).subscribe(() => {
      this.msg = "";
    });
  }
}
