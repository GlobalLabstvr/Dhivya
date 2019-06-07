import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { FeedbackModule } from './feedback/feedback.module';
import { FeedbackRoutingModule } from './feedback/feedback-routing.module';



@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LoginModule,
    AppRoutingModule,
    FeedbackModule,
    FeedbackRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
