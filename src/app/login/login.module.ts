import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [SignUpComponent, SignInComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [SignInComponent, SignUpComponent]
})
export class LoginModule { }
