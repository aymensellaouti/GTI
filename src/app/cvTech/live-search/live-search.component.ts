import { Component, OnInit } from '@angular/core';
import {CvService} from '../service/cv.service';
import {Personne} from '../../Model/Personne';
import {Router} from '@angular/router';

@Component({
  selector: 'app-live-search',
  templateUrl: './live-search.component.html',
  styleUrls: ['./live-search.component.css']
})
export class LiveSearchComponent implements OnInit {
  search = '';
  personnes: Personne[];
  constructor(
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
    this.personnes = [];
  }
   liveSearch() {
    this.cvService.getByFilter(this.search).subscribe(
      (personnes) => {
        this.personnes = personnes;
      }
    );
   }
  findDetails(id) {
    const link = ['cv', id];
    this.router.navigate(link);
  }
}
