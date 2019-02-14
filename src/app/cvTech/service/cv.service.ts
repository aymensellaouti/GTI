import {EventEmitter, Injectable} from '@angular/core';
import {Personne} from '../../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne [];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 36, 'enseignant', 'as.jpg', 7085595 ),
      new Personne(2, 'sellaouti', 'skander', 0, 'bébé', 'skan.jpg', 1 ),
      new Personne(3, 'sellaouti', 'mohamed', 22, 'bébé', '', 1 ),
    ];
  }
  getPersonnes() {
    return this.personnes;
  }
}
