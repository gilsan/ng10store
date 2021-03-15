import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirestoreService } from '../../../firestore.service';
import { CourseService } from '../course.service';
import { Course } from './../models';


@Component({
  // tslint:disable-next-line:component-selector
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
    private service: CourseService,
    private firestoreService: FirestoreService,
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

  ngOnInit(): void {

  }

  save() {
    const { docId, ...course } = this.course;
    const changeCourse = { ...course, ...this.form.value }
    console.log(changeCourse);
    this.firestoreService.saveCourse(docId, this.form.value)
      .subscribe(() => {
        this.dialogRef.close(this.form.value);
      });



    // this.service.saveCourse(this.course.id, this.form.value)
    //   .subscribe(() => this.dialogRef.close())
  }

  close() {
    this.dialogRef.close();
  }

}
