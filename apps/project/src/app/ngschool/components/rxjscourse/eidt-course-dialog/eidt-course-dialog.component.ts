import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseService } from '../course.service';
import { Course } from './../models';


@Component({
  selector: 'app-eidt-course-dialog',
  templateUrl: './eidt-course-dialog.component.html',
  styleUrls: ['./eidt-course-dialog.component.scss']
})
export class EidtCourseDialogComponent implements OnInit {

  form: FormGroup;
  course: Course;
  description: string;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EidtCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) course: Course,
    private service: CourseService
  ) {
    this.course = course;
    this.description = course.description;

    this.form = fb.group({
      description: [course.description, Validators.required],
      category: [course.category, Validators.required],
      releasedAt: [new Date(), Validators.required],
      longDescription: [course.longDescription, Validators.required]
    });

  }

  ngOnInit(): void { }

  save() {
    this.service.saveCourse(this.course.id, this.form.value)
      .subscribe(() => this.dialogRef.close())
  }

  close() {
    this.dialogRef.close();
  }

}
