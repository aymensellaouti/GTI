import {EventEmitter, Injectable} from '@angular/core';
import {Personne} from '../../Model/Personne';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  apiLink = 'http://localhost:3000/api/personnes'
  personnes: Personne [];
  constructor(private http: HttpClient) {}
  getPersonnes() {
    return this.http.get<Personne[]>(this.apiLink);
  }
  getByFilter(name) {
    const filter = `{"where":{"name":{"like":"%${name}%"}}}`;
    const params = new HttpParams().set('filter', filter);
    return this.http.get<Personne[]>(this.apiLink, {params});
  }
  findById(id) {
    return this.http.get<Personne>(this.apiLink + '/' + id);
  }
  deletePersonne(id) {
    return this.http.delete(this.apiLink + '/' + id);
  }
}
