import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
constructor() { }
  username: string;
  password: string;

  ngOnInit() {
  }
  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
 }

}
