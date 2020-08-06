import { Component, OnInit, OnChanges, DoCheck } from "@angular/core";
import { UserInfoService } from "src/app/share/services/user-info/user-info.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatPage implements OnInit, OnChanges, DoCheck {
  id: string;
  pw: string;

  constructor(private userInfoService: UserInfoService) {}

  /**
   * 부모로부터 데이터를 받는 컴포넌트 일 경우, 해당 데이터가 변경되었을 때 호출
   * 부모로부터 받는 값이 없으면 호출되지 않는다.
   */
  ngOnChanges() {}

  ngOnInit() {
    console.log("ngOnInit");

    this.id = this.userInfoService.id;
    this.pw = this.userInfoService.pw;
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }
}
