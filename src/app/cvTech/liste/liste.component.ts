import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Model/Personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  personnes: Personne [];
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 36, 'enseignant', 'as.jpg', 7085595 ),
      new Personne(2, 'sellaouti', 'skander', 0, 'bébé', 'skan.jpg', 1 ),
    ];
  }

}
