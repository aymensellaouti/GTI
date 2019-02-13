import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-couleurs',
  templateUrl: './couleurs.component.html',
  styleUrls: ['./couleurs.component.css']
})
export class CouleursComponent implements OnInit {

  color = 'red';
  background = 'yellow';
  font = 'garamond';
  taille = '20px';
  constructor() { }

  ngOnInit() {
  }
  changeTaille(taille) {
    this.taille = taille + 'px';
  }

}
