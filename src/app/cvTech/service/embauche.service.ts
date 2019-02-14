import { Injectable } from '@angular/core';
import {Personne} from '../../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  personnes: Personne [];
  constructor() {
    this.personnes = [];
  }
  getEmbauches() {
    return this.personnes;
  }
  embaucher(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    if (index < 0) {
      this.personnes.push(personne);
    } else {
      alert(`${personne.firstname} ${personne.name} est déjà embauchée :D`);
    }
  }
}
