import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addPersonne(formulaire: NgForm) {
    console.log(formulaire);
  }

}
