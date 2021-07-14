import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OpencvService } from '../services/opencv.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-glasses',
  templateUrl: './glasses.component.html',
  styleUrls: ['./glasses.component.scss']
})
export class GlassesComponent implements OnInit {

  @ViewChild('uploadfile') uploadfile: ElementRef;
  filelist = [];

  constructor(
    public service: OpencvService
  ) { }

  ngOnInit(): void {
  }

  getTest(evt: Event) {
    this.service.getTest().subscribe(data => {
      console.log(data);
    })
  }

  fileUpload(evt) {

    if (evt.target.files.length) {
      for (let i = 0; i < evt.target.files.length; i++) {
        this.filelist.push(evt.target.files[i])
      }
    }

  }

  onConfirm() {
    this.uploadfile.nativeElement.value = '';
    const formData = new FormData();
    for (const item of this.filelist) {
      formData.append('image', item);
    }

    this.service.fileupload(formData).subscribe(data => {

      console.log('File Upload: ', data);
    })
  }

  onClasses() {
    this.service.getGlassesListAll().subscribe(data => {
      console.log(data);
    })
  }

}
