import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { Course, Lesson } from './../models';
import { Observable } from 'rxjs';

import { concatMap, delay, filter, first, map, shareReplay, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course$: Observable<Course>;

  lessons$: Observable<Lesson[]>;

  displayedColumns = ['seqNo', 'description', 'duration'];

  currentPage = 0;

  @ViewChildren(MatPaginator) paginators: QueryList<MatPaginator>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private coursesService: CourseService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    const courseUrl = this.route.snapshot.paramMap.get("courseUrl");

    this.course$ = this.coursesService.findCourseByUrl(courseUrl);

    this.loadLessonsPage();

  }

  ngAfterViewInit() {

    this.paginators.changes
      .pipe(
        filter(paginators => paginators.length > 0),
        switchMap(paginators => paginators.first.page)
      )
      .subscribe(
        (page: PageEvent) => {
          this.currentPage = page.pageIndex;
          this.loadLessonsPage();
        }
      );
  }

  loadLessonsPage() {
    console.log("현재 페이지: ", this.currentPage);
    this.lessons$ = this.course$.pipe(
      concatMap(course => this.coursesService.findLessons(course.id, this.currentPage, 3)),
    );
  }

}
