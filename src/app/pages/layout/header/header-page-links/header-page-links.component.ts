import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header-page-links',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './header-page-links.component.html',
  styleUrl: './header-page-links.component.scss',
})
export class HeaderPageLinksComponent {}
