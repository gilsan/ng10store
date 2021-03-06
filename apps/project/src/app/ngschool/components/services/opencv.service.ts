import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpencvService {

  apiUrl = 'http://127.0.0.1:8000/camera/';
  url = 'http://localhost:8000';

  constructor(
    private http: HttpClient
  ) { }

  getImage(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getTest(): Observable<any> {
    return this.http.get(`${this.url}/challenges/january.`);
  }

  fileupload(formData: FormData): Observable<any> {
    return this.http.post(`${this.url}/glasses/image/`, formData);
  }

  getPhoto(pk: string): Observable<any> {
    return this.http.get(`${this.url}/glasses/image/${pk}`);
  }

  getGlassesListAll(): Observable<any> {
    return this.http.get(`${this.url}/glasses/list/`);
  }
  getGlassesOne(): Observable<any> {
    return this.http.get(`${this.url}/glasses/2`);
  }

  postGlassesList(): Observable<any> {
    const data = {
      "name": "배우면 기회가 온다.",
      "description": "배우자 배워.",
      "active": true
    }

    return this.http.post(`${this.url}/glasses/list/`, data);
  }

  putGlasses(): Observable<any> {
    const data = {
      "name": "모두의 앵귤러와 OpenCV.",
      "description": "Computer View",
      "active": true
    }

    return this.http.post(`${this.url}/glasses/3`, data);
  }

  deleteGlasses(): Observable<any> {
    return this.http.delete(`${this.url}/glasses/3`);
  }

  getTypeImage(action: string, imageName: string): Observable<any> {
    const params = new HttpParams()
      .set('action', action)
      .set('imageName', imageName);

    return this.http.post(`${this.url}/glasses/image/`, { params, responseType: 'blob' })
  }



}

