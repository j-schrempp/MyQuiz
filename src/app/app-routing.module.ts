import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {AuthService} from "./Services/auth.service";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', component:LoginComponent, canActivate: [AuthService]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
