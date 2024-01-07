import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast/toast.service';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent implements OnInit {
  constructor(private readonly toastService: ToastService) {}
  ngOnInit(): void {
    this.toastService.showError('No such page is found');
  }
}
