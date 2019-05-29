import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles :[` 
  h2{
    color: blue;
  }`]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
