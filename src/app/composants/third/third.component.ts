import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gti-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  two = 'default';
  constructor() { }

  ngOnInit() {
  }

}
