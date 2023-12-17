import { Component } from '@angular/core';
import { HomeCoursesComponent } from './home-courses/home-courses.component';
import { HomeIntroComponent } from './home-intro/home-intro.component';
import { HomeTechnologiesComponent } from './home-technologies/home-technologies.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeIntroComponent,
    HomeCoursesComponent,
    HomeTechnologiesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
