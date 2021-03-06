import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from './../models';

@Component({
  selector: 'app-course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrls: ['./course-card-list.component.scss']
})
export class CourseCardListComponent implements OnInit {

  @Input() courses: Course[];
  @Output() courseChanged = new EventEmitter();

  constructor(
    private service: CourseService
  ) { }

  ngOnInit(): void {

  }

  editCourse(course: Course) {

  }

  onDeleteCourse(course: Course) {

  }

  selectedCourse(course: Course) {
    console.log(course);
  }

}
