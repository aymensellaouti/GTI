import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Model/Personne';
import {EmbaucheService} from '../service/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  embauches: Personne [];
  constructor(private embaucheService: EmbaucheService) { }
  ngOnInit() {
    this.embauches = this.embaucheService.getEmbauches();
  }
}
