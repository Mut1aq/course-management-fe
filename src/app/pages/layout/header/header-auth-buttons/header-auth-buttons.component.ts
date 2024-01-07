import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header-auth-buttons',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header-auth-buttons.component.html',
  styleUrl: './header-auth-buttons.component.scss',
})
export class HeaderAuthButtonsComponent {}
