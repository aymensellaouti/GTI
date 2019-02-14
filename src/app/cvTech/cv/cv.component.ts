import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Model/Personne';
import {PremierService} from '../../service/premier.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne;
  constructor() { }
  ngOnInit() {
  }
  getPersonne(personne) {
    this.selectedPersonne = personne;
    console.log('cv', personne);
  }
}
