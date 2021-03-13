import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap, take, tap, shareReplay } from 'rxjs/operators';
import { CourseService } from './course.service';
import { Course } from './models';
import { AngularFirestore } from '@angular/fire/firestore';
import { COURSES, findLessonsForCourse } from './db-data';
import { FirestoreService } from './../../firestore.service';
import { snap } from 'gsap/all';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  // tslint:disable-next-line:component-selector
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
    private db: AngularFirestore,
    private firebaseService: FirestoreService

  ) { }

  ngOnInit(): void {
    // this.reload();
    this.allCourses();

  }

  allCourses() {
    const firestore$ = this.firebaseService.getCourses()

    // firestore$.subscribe(data => console.log(data))
    this.beginnerCourses$ = firestore$.pipe(
      map(courses => courses.filter(course => course.category.includes('BEGINNER')))
    );

    this.advancedCourses$ = firestore$.pipe(
      map(courses => courses.filter(course => course.category === 'ADVANCED'))
    );
  }



  reload() {
    const courses$ = this.refresh$.pipe(
      switchMap(_ => this.service.getCourses()),
      take(1),
    );

    this.beginnerCourses$ = this.service.selectBeginnerCourse();
    this.advancedCourses$ = this.service.selectAdvancedCourse();

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
    // tslint:disable-next-line:prefer-const
    for (let course of Object.values(COURSES)) {
      const newCourse = this.removeId(course);
      const courseRef = await coursesCollection.add(newCourse);
      const lessons = await courseRef.collection('lessons');
      const courseLessons = findLessonsForCourse(course['id']);
      // console.log(`Uploading course ${course['description']}`);
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

  // readDoc() {
  //   this.db.doc('/courses/2ULbAhsUF31vsyiJnXc5').get()
  //     .subscribe(snapdata => {
  //       //  console.log(snap.id);
  //       //  console.log(snap.data());
  //     })
  // }





}
