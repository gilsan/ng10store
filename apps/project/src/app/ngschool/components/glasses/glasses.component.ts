import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SafeResourceUrl, DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { map, concatMap, tap } from 'rxjs/operators';
import { OpencvService } from '../services/opencv.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-glasses',
  templateUrl: './glasses.component.html',
  styleUrls: ['./glasses.component.scss']
})
export class GlassesComponent implements OnInit {

  @ViewChild('uploadfile') uploadfile: ElementRef;
  @ViewChild('title') title: ElementRef;
  @ViewChild('desc') desc: ElementRef;
  filelist = [];
  url: SafeUrl = {};
  isShow = false;

  name = '';
  description = '';

  constructor(
    public service: OpencvService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
  }

  getTest(evt: Event) {
    this.service.getTest().subscribe(data => {
      console.log(data);
    })
  }

  fileUpload(evt) {
    this.url = '';
    this.filelist = [];
    if (evt.target.files.length) {
      this.isShow = true;
      for (let i = 0; i < evt.target.files.length; i++) {
        this.filelist.push(evt.target.files[i])
      }
      const url = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.filelist[0]));
      this.url = url;
    }

  }


  onConfirm() {
    this.uploadfile.nativeElement.value = '';
    const formData = new FormData();
    for (const item of this.filelist) {
      formData.append('image', item);

      const url = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(item));
      console.log('image url: ', url);
      this.url = url;
    }

    this.service.fileupload(formData).subscribe(data => {
      console.log('File Upload: ', data);
    })

  }

  onClasses(type: string) {
    this.service.getGlassesListAll().subscribe(data => {
      console.log(data);
    })
  }

  onTitle(name: string) {
    this.name = name;
  }

  onDesc(description: string) {
    this.description = description;
  }

  onImages(type: string) {
    this.uploadfile.nativeElement.value = '';
    this.title.nativeElement.value = '';
    this.desc.nativeElement.value = '';
    this.makeService(type);
  }

  makeform(type: string): FormData {
    const formData = new FormData();
    formData.append('image', this.filelist[0]);
    formData.append('name', this.name);
    formData.append('description', this.description);
    formData.append('action', type);
    formData.append('id', '-1');
    const url = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.filelist[0]));
    this.url = url;
    return formData;

  }

  makeService(type: string) {
    this.service.fileupload(this.makeform(type))
      .pipe(
        map(data => JSON.parse(data)),
        map(data => data["pk"]),
        concatMap(pk => this.service.getPhoto(pk)),
        map(data => JSON.parse(data)),
        map(data => data["fields"]["image"]),
      )
      .subscribe(data => {
        console.log(data);
        this.url = 'http://localhost:8000/user-media/' + data;
      });
  }

}


