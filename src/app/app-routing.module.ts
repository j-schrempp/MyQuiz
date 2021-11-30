import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {AuthService} from "./Services/auth.service";

const routes: Routes = [
  {path: '', component: MainComponent, canActivate: [AuthService]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
