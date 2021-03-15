import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from './../models';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EidtCourseDialogComponent } from '../eidt-course-dialog/eidt-course-dialog.component';
import { filter } from 'rxjs/internal/operators/filter';


@Component({
  selector: 'app-course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrls: ['./course-card-list.component.scss']
})
export class CourseCardListComponent implements OnInit {

  @Input() courses: Course[];
  @Output() courseChanged = new EventEmitter();


  constructor(
    private service: CourseService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  onDeleteCourse(course: Course) { }

  selectedCourse(course: Course) {
    console.log(course);
  }

  editCourse(course: Course) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = course;

    const dialogRef = this.dialog.open(EidtCourseDialogComponent, dialogConfig);
    dialogRef.afterClosed()
      .pipe(
        filter(data => !!data)
      )
      .subscribe(val => {
        this.courseChanged.emit();
      }
      );
  }

}
