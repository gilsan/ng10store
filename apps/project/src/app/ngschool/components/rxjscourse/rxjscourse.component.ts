import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { CourseService } from './course.service';
import { Course } from './models';
import { AngularFirestore } from '@angular/fire/firestore';
import { COURSES, findLessonsForCourse } from './db-data';


@Component({
  selector: 'app-rxjscourse',
  templateUrl: './rxjscourse.component.html',
  styleUrls: ['./rxjscourse.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjscourseComponent implements OnInit {

  promTotal$: Observable<number>;
  loading$: Observable<boolean>;
  // courses$: Observable<Course[]>;
  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;
  refresh$ = new BehaviorSubject<boolean>(true);

  constructor(
    private service: CourseService,
    private db: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.reload();
    this.readDoc();
  }

  reload() {
    // const courses$ = this.service.findAllCourses();
    // const courses$ = this.service.getCourses();
    const courses$ = this.refresh$.pipe(
      switchMap(_ => this.service.getCourses()),
      take(1),
      tap(data => console.log(data))
    );

    this.loading$ = courses$.pipe(map(courses => !!courses));

    this.beginnerCourses$ = courses$.pipe(
      map(courses => courses.filter(course => course.category === 'BEGINNER'))
    );

    this.advancedCourses$ = courses$.pipe(
      map(courses => courses.filter(course => course.category === 'ADVANCED'))
    );

    this.promTotal$ = courses$.pipe(
      map(courses => courses.filter(course => course.promo).length)
    );

  }

  screenRefresh() {
    this.refresh$.next(true);
  }

  async uploadData() {
    const coursesCollection = this.db.collection('courses');
    const courses = await this.db.collection('courses').get();
    for (let course of Object.values(COURSES)) {
      const newCourse = this.removeId(course);
      const courseRef = await coursesCollection.add(newCourse);
      const lessons = await courseRef.collection('lessons');
      const courseLessons = findLessonsForCourse(course['id']);
      console.log(`Uploading course ${course['description']}`);
      for (const lesson of courseLessons) {
        const newLesson = this.removeId(lesson);
        await lessons.add(newLesson);
      }
    }
  }

  removeId(data: any) {
    const newData: any = { ...data };
    delete newData.id;
    return newData;
  }

  readDoc() {
    this.db.doc('/courses/2ULbAhsUF31vsyiJnXc5').get()
      .subscribe(snap => {
        console.log(snap.id);
        console.log(snap.data());
      })
  }



}
