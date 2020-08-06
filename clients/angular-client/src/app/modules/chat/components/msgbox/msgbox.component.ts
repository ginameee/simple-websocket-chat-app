import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-msgbox",
  templateUrl: "./msgbox.component.html",
  styleUrls: ["./msgbox.component.scss"]
})
export class MsgboxComponent implements OnInit {
  @Input() userName: string;
  @Input() msg: string;

  constructor() {}

  ngOnInit() {
    console.log(this.userName);
  }
}
