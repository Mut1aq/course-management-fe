import { Component } from '@angular/core';
import { HeaderWhyChooseMeComponent } from './header-why-choose-me/header-why-choose-me.component';
import { HomeCoursesComponent } from './home-courses/home-courses.component';
import { HomeIntroComponent } from './home-intro/home-intro.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeIntroComponent,
    HomeCoursesComponent,
    HeaderWhyChooseMeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
