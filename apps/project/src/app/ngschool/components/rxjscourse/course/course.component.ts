import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { Course, Lesson } from './../models';
import { combineLatest, forkJoin, Observable } from 'rxjs';

import {
  concatMap, delay, filter, finalize, first, map, shareReplay,
  switchMap, take, tap, withLatestFrom
} from 'rxjs/operators';

import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FirestoreService } from './../../../firestore.service';

export interface IPage {
  length: number;
  pageIndex: number;
  pageSize: number;
  previousPageIndex: number;
}


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, AfterViewInit {

  course: Course;
  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;

  displayedColumns = ['seqNo', 'description', 'duration'];
  page: IPage;
  currentPage = 0;
  loading = false;

  @ViewChildren(MatPaginator) paginators: QueryList<MatPaginator>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private coursesService: CourseService,
    private firestore: FirestoreService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.course = this.route.snapshot.data['course'];
    this.course$ = this.route.data.pipe(map(data => data['course']))
      .pipe(
        tap(data => console.log(data)),
        tap(() => this.loading = true)
      );

    this.lessons$ = this.course$.pipe(
      concatMap(course => this.firestore.findLessons(course.docId)),
      tap(() => this.loading = false)
    )

  }

  ngAfterViewInit() {
    this.paginators.changes
      .pipe(
        tap(data => console.log('page', data)),
        filter(paginators => paginators.length > 0),
        switchMap(paginators => paginators.first.page)
      )
      .subscribe(
        (page: PageEvent) => {
          this.currentPage = page.pageIndex;
          //  this.loadLessonsPage();
        }
      );
  }

  loadLessonsPage() {
    console.log("현재 페이지: ", this.currentPage);
    return this.course$.pipe(
      concatMap(course => this.coursesService.findLessons(course.id, this.currentPage, 3)),
    );
  }

  pageChange(evt: IPage) {
    this.loading = true;
    this.lessons$ = this.course$.pipe(
      concatMap(course => this.firestore.findLessons(course.docId, 'asc', evt.pageIndex)),
      tap(() => this.loading = false)
    )
  }

}
