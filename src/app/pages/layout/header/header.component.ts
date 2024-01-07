import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderAuthButtonsComponent } from './header-auth-buttons/header-auth-buttons.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderMobileMenuComponent } from './header-mobile-menu/header-mobile-menu.component';
import { HeaderPageLinksComponent } from './header-page-links/header-page-links.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    HeaderMobileMenuComponent,
    HeaderLogoComponent,
    HeaderAuthButtonsComponent,
    HeaderPageLinksComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private readonly platformID: Object
  ) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformID))
      this.isMobileScreen = this.document.defaultView!.innerWidth < 585;
  }

  isMobileScreen = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event & { target: { innerWidth: number } }) {
    const width = event.target?.innerWidth;

    if (width < 585) this.isMobileScreen = true;
    else this.isMobileScreen = false;
  }
}
