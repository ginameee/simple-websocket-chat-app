import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContentComponent } from "./components/content/content.component";
import { TypeNSendComponent } from "./components/type-n-send/type-n-send.component";
import { ChatPage } from "./pages/chat/chat.component";
import { UserInfoService } from "src/app/share/services/user-info/user-info.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ContentComponent, TypeNSendComponent, ChatPage],
  imports: [CommonModule, FormsModule],
  exports: [ChatPage],
  providers: []
})
export class ChatModule {}
