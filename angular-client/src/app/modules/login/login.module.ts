import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginPage } from "./pages/login.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [LoginPage],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [LoginPage]
})
export class LoginModule {}
