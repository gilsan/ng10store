import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { USERS, COURSES, LESSONS } from './db-data';
import { Course, Lesson } from './models';
import { filter, map, shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // courses: Course[];
  // lessons: Lesson[];

  subject$ = new BehaviorSubject<Course[]>([]);
  courseList$ = this.subject$.asObservable();

  lessonsSubject$ = new BehaviorSubject<Lesson[]>([]);
  lessonsList$ = this.lessonsSubject$.asObservable();

  constructor() {
    this.getAllCourses();
    this.getAllLessons();
  }

  getAllLessons() {
    const lessons: Lesson[] = Object.values(LESSONS);
    // return of(this.lessons).pipe(shareReplay());
    return this.lessonsSubject$.next(lessons)
  }

  getAllCourses() {
    const course: Course[] = Object.values(COURSES);
    return this.subject$.next(course)
  }

  selectBeginnerCourse() {
    return this.levelCourse('BEGINNER');
  }

  selectAdvancedCourse() {
    return this.levelCourse('ADVANCED');
  }

  levelCourse(level: string) {
    return this.courseList$.pipe(
      map(courses => courses.filter(course => course.category === level))
    )
  }

  getCourses() {
    return this.courseList$.pipe(
      shareReplay()
    )
  }

  findCourseByUrl(courseUrl: string): Observable<Course> {
    return this.courseList$.pipe(
      map(courses => courses.filter(course => course.url === courseUrl)),
      map(courses => courses[0])
    )
  }
  findCourseById(id: number): Observable<Course> {
    return this.courseList$.pipe(
      map(courses => courses.filter(course => course.id === id)),
      map(courses => courses[0])
    )
  }

  findLessons(courseId: number, pageNumber = 0, pageSize = 3): Observable<Lesson[]> {
    return this.lessonsList$.pipe(
      map(lessons => lessons.filter(lesson => lesson.courseId === courseId)),
      map(lessons => lessons.slice(pageNumber, 3))
    )
  }

  /**
   * Param: @id: courseID
   * Param: @changes: course 변경내용
   */
  saveCourse(id: number, change): Observable<any> {
    const courses = this.subject$.getValue();
    const courseIndex = courses.findIndex(course => course.id === id);
    const newCourses = courses.slice(0);
    newCourses[courseIndex] = { ...newCourses[courseIndex], ...change };
    this.subject$.next(newCourses);
    /***
     *  return this.http.put('api/course/update', { id, change})
     */

    return of([]);

  }

}