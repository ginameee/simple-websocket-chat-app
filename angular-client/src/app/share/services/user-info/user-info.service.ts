import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class UserInfoService {
  private _id: string;
  private _pw: string;

  public get id(): string {
    return this._id;
  }

  public get pw(): string {
    return this._pw;
  }

  public set id(id: string) {
    this._id = id;
  }

  public set pw(pw: string) {
    this._pw = pw;
  }

  constructor(private router: Router) {}

  login(id: string, pw: string) {
    this._id = id;
    this._pw = pw;

    this.goPage("/chat");
  }

  goPage(target) {
    this.router.navigateByUrl(target);
  }
}
