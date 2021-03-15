import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
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
  constructor(
    private db: AngularFirestore,
    private firebaseAuth: AngularFireAuth,
  ) { }

  async signin(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      })
  }

  async signup(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      })
  }

  logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
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




