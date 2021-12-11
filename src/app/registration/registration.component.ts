import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  hide: boolean = true;
  hide2: boolean = true;
  password: string = "";
  password2: string ="";
  email: string = "";
  name: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  acc_Clicked() {
    this.router.navigate(['login'])
  }

}
