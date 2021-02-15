import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  @Output() closebtn: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    console.log('close');
  }

}
