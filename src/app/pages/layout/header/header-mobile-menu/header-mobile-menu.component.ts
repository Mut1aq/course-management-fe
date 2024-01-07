import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header-mobile-menu',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './header-mobile-menu.component.html',
  styleUrl: './header-mobile-menu.component.scss',
})
export class HeaderMobileMenuComponent {
  isMenuOpen = false;

  openMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
