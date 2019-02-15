import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Model/Personne';
import {ActivatedRoute, Router} from '@angular/router';
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
    private cvService: CvService,
    private router: Router
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
  deletePerson(id) {
    this.cvService.deletePersonne(id).subscribe(
      (response) => {
        this.router.navigate(['']);
      },
      (erreur) => {
        alert('problème de suppression');
        console.log(erreur);
      }
    );
  }
}
