import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-my-msgbox",
  templateUrl: "./my-msgbox.component.html",
  styleUrls: ["./my-msgbox.component.scss"]
})
export class MyMsgboxComponent implements OnInit {
  @Input() msg: string;

  constructor() {}

  ngOnInit() {}
}
