import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent implements OnInit {
  images: string[];
  currentImage;
  observable = new Observable<string>(
    (observer) => {
      let i = 1;
      setInterval(() => {
        observer.next(this.images[i]);
        i++;
        if (i === this.images.length) {
          i = 0;
        }
      }, 2000);
    });
constructor() { }

  ngOnInit() {
    this.images = ['as.jpg', 'skan.jpg', 'cv.gif', 'img.png', 'img2.png', 'img3.png'];
    this.currentImage = this.images[0];
    this.observable.subscribe(
      (val) => {
        this.currentImage = val;
        console.log(val);
      },
      (erreur) => {
        console.log(erreur);
      }
      );
  }

}
