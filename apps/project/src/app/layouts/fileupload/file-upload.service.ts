import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpEventType } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FileUploadService {
  // private apiUrl = 'http://183.96.2.133:3000/fileUpload';
  private apiUrl = 'http://192.168.1.4:3000/fileUpload';
  // private handleError: HandlerError;

  httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  redirectUrl: string;

  constructor(
    private http: HttpClient,
    // private httpErrorHandler: HttpErrorHandler
  ) {
    // this.handleError = this.httpErrorHandler.createHandleError('FileUploadService');
  }

  fileUpload(formData: any) {
    return this.http.post(`${this.apiUrl}/upload`, formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map(event => this.getEventMessage(event)),
      //  catchError(this.handleError('fileUpload', null))
    )
  }

  private getEventMessage(event: HttpEvent<any>) {
    switch (event.type) {
      case HttpEventType.UploadProgress:
        return this.fileUploadProgress(event);
      case HttpEventType.Response:
        return event.body;
      default:
        return `Upload event: ${event.type}.`;
    }
  }

  private fileUploadProgress(event: any) {
    const percentDone = Math.round(100 * event.loaded / event.total);
    return { progress: percentDone, files: [] };
  }


}