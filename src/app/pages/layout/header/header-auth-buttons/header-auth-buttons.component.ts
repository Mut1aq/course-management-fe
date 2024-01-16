import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header-auth-buttons',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './header-auth-buttons.component.html',
  styleUrl: './header-auth-buttons.component.scss',
})
export class HeaderAuthButtonsComponent {}
