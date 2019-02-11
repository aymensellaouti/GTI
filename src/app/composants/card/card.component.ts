import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  name = 'sellaouti';
  firstname = 'aymen';
  age = 36;
  cin = 7075595;
  job = 'Enseignant';
  path = 'as.jpg';
  constructor() { }
  ngOnInit() {
  }

}
