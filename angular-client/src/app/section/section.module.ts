import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginPage } from "../modules/login/pages/login.component";
import { SectionComponent } from "./section.component";
import { RouterModule, Routes } from "@angular/router";
import { ChatPage } from "../modules/chat/pages/chat/chat.component";
import { ChatModule } from "../modules/chat/chat.module";
import { LoginModule } from "../modules/login/login.module";
import { UserInfoService } from "../share/services/user-info/user-info.service";

const routes: Routes = [
  {
    path: "login",
    component: LoginPage,
    pathMatch: "full"
  },
  {
    path: "chat",
    component: ChatPage,
    pathMatch: "full"
  }
];
@NgModule({
  declarations: [SectionComponent],
  imports: [
    CommonModule,
    ChatModule,
    LoginModule,
    RouterModule.forChild(routes)
  ],
  exports: [SectionComponent, RouterModule],
  providers: [UserInfoService]
})
export class SectionModule {}
