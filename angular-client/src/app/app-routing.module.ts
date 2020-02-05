import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // routing을 담당하는 컴포넌트나 서비스들을 모아놓은 모듈

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // route모듈이 root에 적용된다.
  exports: [RouterModule]
})
export class AppRoutingModule {}
