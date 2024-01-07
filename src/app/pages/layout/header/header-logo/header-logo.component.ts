import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-logo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header-logo.component.html',
  styleUrl: './header-logo.component.scss',
})
export class HeaderLogoComponent {}
