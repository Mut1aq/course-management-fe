import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss',
})
export class CourseDetailComponent implements OnInit {
  courseID!: string;
  constructor(private readonly route: ActivatedRoute) {}
  ngOnInit() {
    this.courseID = this.route.snapshot.paramMap.get('id')!;
  }
}
