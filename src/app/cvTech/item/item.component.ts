import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/Personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() personne: Personne;
  @Output() personSent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  // déclencher un event qui contient la personne sélectionnée
  sendPersonne() {
    console.log('click');
    this.personSent.emit(this.personne);
  }
}
