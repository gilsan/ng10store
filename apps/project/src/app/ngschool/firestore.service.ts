import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { Course, Lesson } from './components/rxjscourse/models';
import { convertSnaps } from '../shared/utils';

import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private db: AngularFirestore
  ) { }

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




