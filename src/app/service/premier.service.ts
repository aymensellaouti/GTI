import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremierService {

  constructor() { }
  sayHello() {
    alert('Hello');
  }
}
