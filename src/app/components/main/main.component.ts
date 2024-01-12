import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { TasktwoService } from 'src/app/services/tasktwo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  courses: Course[] = [];
  constructor(private route:Router,private taskservice:TasktwoService){}
  ngOnInit(){
    this.getAllCourses()
  }
  Edit(id:any){
    this.route.navigate(['/addcourse/'+id])
    }
    getAllCourses() {
      this.taskservice.getAllCourses().subscribe(
        (response: Course[]) => {
          this.courses = response;  
        }
      );
    }
    
    deleteCourse(id:any): void {
      this.taskservice.deleteCourse(Number(id)).subscribe(
        (response: void) => {
          this.getAllCourses();
        }
  
      );
    }
}
