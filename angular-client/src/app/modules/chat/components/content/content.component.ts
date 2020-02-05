import {
  Component,
  OnInit,
  OnDestroy,
  ANALYZE_FOR_ENTRY_COMPONENTS
} from "@angular/core";
import { Msg } from "src/app/share/mocks/msg";
import { ChatService } from "src/app/share/services/chat/chat.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"]
})
export class ContentComponent implements OnInit, OnDestroy {
  msgs: Msg[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.connect().subscribe(res => {
      console.log(res);
      this.msgs.push(res);
    });
  }

  ngOnDestroy() {}

  getMsgs(): void {}
}
