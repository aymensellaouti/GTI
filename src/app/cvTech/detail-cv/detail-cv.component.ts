import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Model/Personne';
import {ActivatedRoute} from '@angular/router';
import {CvService} from '../service/cv.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  personne: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
          this.cvService.findById(params['id']).subscribe(
            (personne) => {
              this.personne = personne;
            }
          );
      }
    );
  }
}
