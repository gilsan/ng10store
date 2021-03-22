import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable, BehaviorSubject } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { Course, Lesson } from './components/rxjscourse/models';
import { convertSnaps } from '../shared/utils';

import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  isLoggedIn = false;
  subject$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.subject$.asObservable();

  url = 'http://localhost:5001/ngtenpro/us-central1/getCourses';

  constructor(
    private db: AngularFirestore,
    private firebaseAuth: AngularFireAuth,
  ) {
    this.inituser();
  }

  inituser() {
    const user = localStorage.getItem('user')
    if (user) {
      this.subject$.next(true);
    }
  }

  signin(email: string, password: string): Observable<any> {
    return from(this.firebaseAuth.signInWithEmailAndPassword(email, password))
      .pipe(
        tap(res => {
          this.isLoggedIn = true;
          localStorage.setItem('user', JSON.stringify(res.user));
          this.subject$.next(true);
        })
      );

  }

  signup(email: string, password: string): Observable<any> {
    return from(this.firebaseAuth.createUserWithEmailAndPassword(email, password))
      .pipe(
        tap(res => {
          this.isLoggedIn = true;
          localStorage.setItem('user', JSON.stringify(res.user));
          this.subject$.next(true);
        })
      );

  }

  logout(): Observable<any> {
    return from(this.firebaseAuth.signOut())
      .pipe(
        tap(res => {
          console.log('[service] logout:', res);
          localStorage.removeItem('user');
          this.subject$.next(false);
        })
      );

  }


  saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
    return from(this.db.doc(`courses/${courseId}`).update(changes));
  }

  getCourses(): Observable<Course[]> {
    return this.db.collection('courses', ref => ref.orderBy("seqNo"))
      .snapshotChanges()
      .pipe(
        map((snaps) => convertSnaps<Course>(snaps)),
        first()
      );

  }

  getCourseByUrl(url: string): Observable<Course> {
    return this.db.collection('courses', ref => ref.where('url', '==', url)).snapshotChanges()
      .pipe(
        map((snaps) => {
          const courses = convertSnaps<Course>(snaps);
          return courses.length === 1 ? courses[0] : undefined;
        }),
        first()
      )
  }

  findLessons(courseId: string, sortOrder: firebase.firestore.OrderByDirection = 'asc',
    pageNumber = 0, pageSize = 3) {

    return this.db.collection(`courses/${courseId}/lessons`,
      ref => ref.orderBy('seqNo', sortOrder)
        .limit(pageSize).startAfter(pageNumber * pageSize))
      .snapshotChanges()
      .pipe(
        map(snaps => convertSnaps<Lesson>(snaps)),
        first(),
      );

  }



}




