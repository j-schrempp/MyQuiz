import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {AuthService} from "./Services/auth.service";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";

const routes: Routes = [
  {path: '', component:RegistrationComponent},
  {path:'main', component:MainComponent, canActivate: [AuthService]},
  {path: 'registry', component: RegistrationComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
