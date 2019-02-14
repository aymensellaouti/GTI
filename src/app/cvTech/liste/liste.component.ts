import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/Personne';
import {CvService} from '../service/cv.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Output() personSent = new EventEmitter();
  personnes: Personne [];
  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.personnes = this.cvService.getPersonnes();
  }
  sendPersonne(personne: Personne) {
    console.log('list', personne);
    this.personSent.emit(personne);
  }

}
