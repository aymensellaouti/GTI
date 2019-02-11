import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name = 'aymen';
  show = false;
  constructor() { }
  couleur: string;
  defaultColor = 'yellow';
  ngOnInit() {
    this.setDefault();
  }
  oppiste(btn): void {
    console.log(btn);
    this.show = !this.show;
  }
  setDefault() {
    this.couleur = this.defaultColor;
  }
  changeColor(couleur) {
    this.couleur = couleur;
  }

}
