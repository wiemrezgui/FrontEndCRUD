import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TasktwoService } from './tasktwo.service';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseResolveService implements Resolve<Course> {

  constructor(private taskservice:TasktwoService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Course> {
    const id =route.paramMap.get("id")
    if (id) {
      // then we have to fetch details from backend..
      let idc =Number(id)
      return this.taskservice.getCourseById(idc)
    } else {
      // return empty product observable.
      return of(this.getCourseDetails());
    }   
  }
  getCourseDetails() {
    return  {
      id: '',
      name: '',
      price: 0,
      courseImages: []
    };
  }
}
