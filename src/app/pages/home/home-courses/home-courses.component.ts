import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-courses',
  standalone: true,
  imports: [],
  templateUrl: './home-courses.component.html',
  styleUrl: './home-courses.component.scss',
})
export class HomeCoursesComponent {
  constructor(private readonly router: Router) {}

  navigateToCourseDetail(courseID: string) {
    this.router.navigate(['course', courseID]);
  }
}
