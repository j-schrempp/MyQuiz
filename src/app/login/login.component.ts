import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
