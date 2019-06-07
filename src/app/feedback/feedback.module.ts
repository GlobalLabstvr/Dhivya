import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { FeedbackRoutingModule } from './feedback-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [CustomerComponent, CustomerListComponent],
  imports: [
    CommonModule,
    FeedbackRoutingModule
  ],
  exports: [CustomerComponent]
})
export class FeedbackModule { }
