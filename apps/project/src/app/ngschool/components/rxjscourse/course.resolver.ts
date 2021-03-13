import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from './models';
import { FirestoreService } from '../../firestore.service';


@Injectable({ providedIn: 'root' })
export class CourseResolver implements Resolve<Course> {

  constructor(
    private courseService: FirestoreService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course | Observable<Course> | Promise<Course> {
    // throw new Error('Method not implemented.');
    const courseUrl = route.paramMap.get('courseUrl');
    return this.courseService.getCourseByUrl(courseUrl);
  }


}