import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
  // Renderer2,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private readonly platformID: Object // TODO: private readonly renderer2: Renderer2
  ) {}
  isAuthButtonsHidden = false;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformID)) {
      const primaryHeader = document.querySelector('.primary-header');
      const navToggle = document.querySelector('.mobile-nav-toggle');
      const primaryNav = document.querySelector('.primary-navigation');

      navToggle?.addEventListener('click', () => {
        primaryNav?.hasAttribute('data-visible')
          ? navToggle?.setAttribute('aria-expanded', 'false')
          : navToggle?.setAttribute('aria-expanded', 'true');
        primaryNav?.toggleAttribute('data-visible');
        primaryHeader?.toggleAttribute('data-overlay');
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event & { target: { innerWidth: number } }) {
    const width = event.target?.innerWidth;

    if (width < 800) this.isAuthButtonsHidden = true;
    else this.isAuthButtonsHidden = false;
  }
}
