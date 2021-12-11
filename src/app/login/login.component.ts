import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string = "";
  hide: boolean = true;
  email: string = "";

  passErr: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login_clicked() {
    this.router.navigate(['main']);
  }

  no_Acc_clicked() {
    this.router.navigate(['registry']);
  }
}
