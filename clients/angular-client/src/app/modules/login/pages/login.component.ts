import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { UserInfoService } from "src/app/share/services/user-info/user-info.service";
import { User } from "src/app/share/mocks/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginPage implements OnInit {
  userInfo: FormGroup;

  constructor(
    private userInfoService: UserInfoService,
    private formBuilder: FormBuilder
  ) {
    this.userInfo = this.formBuilder.group({
      id: "",
      pw: ""
    });
  }

  ngOnInit() {}

  onLogin(userInfo: User) {
    this.userInfoService.login(userInfo.id, userInfo.pw);
  }
}
