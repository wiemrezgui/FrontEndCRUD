import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CourseResolveService } from './services/course-resolve.service';

const routes: Routes = [
  {path:"",component:AddCourseComponent},
  {path:"addcourse/:id",component:AddCourseComponent},
  {path:"editCourse/:id",component:AddCourseComponent,
resolve:{course:CourseResolveService}
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
