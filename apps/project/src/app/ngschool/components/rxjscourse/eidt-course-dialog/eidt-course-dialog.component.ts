import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from './../models';


@Component({
  selector: 'app-eidt-course-dialog',
  templateUrl: './eidt-course-dialog.component.html',
  styleUrls: ['./eidt-course-dialog.component.scss']
})
export class EidtCourseDialogComponent implements OnInit {

  form: FormGroup;
  description: string;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EidtCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) { description, longDescription, category }: Course
  ) {
    this.description = description;
    console.log(longDescription);

    this.form = fb.group({
      description: [description, Validators.required],
      category: [category, Validators.required],
      releasedAt: [new Date(), Validators.required],
      longDescription: [longDescription, Validators.required]
    });

  }

  ngOnInit(): void { }

  save() {
    console.log(this.form.value);
    // this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
