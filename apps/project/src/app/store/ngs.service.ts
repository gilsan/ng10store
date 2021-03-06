import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipolymorphism } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class NgsService {

  apiUrl = 'http://112.169.53.30:3000';
  constructor(
    private http: HttpClient
  ) { }

  // polymorphism/list GET
  getPolymorphism(): Observable<Ipolymorphism[]> {
    return this.http.get<Ipolymorphism[]>(`${this.apiUrl}/polymorphism/list`);
  }


}