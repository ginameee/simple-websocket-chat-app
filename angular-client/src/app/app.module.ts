import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SectionModule } from "./section/section.module";
import { MsgboxComponent } from './msgbox/msgbox.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MsgboxComponent],
  imports: [BrowserModule, AppRoutingModule, SectionModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
