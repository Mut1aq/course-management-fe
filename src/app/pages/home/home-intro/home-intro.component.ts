import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoI } from '../interfaces/logo.interface';

@Component({
  selector: 'app-home-intro',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-intro.component.html',
  styleUrl: './home-intro.component.scss',
})
export class HomeIntroComponent {
  logos: LogoI[] = [
    {
      src: 'assets/images/nestjs.svg',
      alt: 'NestJS Logo',
    },
    {
      src: 'assets/images/angular.png',
      alt: 'Angular Logo',
    },
    {
      src: 'assets/images/postgresql.png',
      alt: 'PostgreSQL Logo',
    },
    {
      src: 'assets/images/flutter.png',
      alt: 'Flutter Logo',
    },
    {
      src: 'assets/images/mongodb.png',
      alt: 'MongoDB Logo',
    },
    {
      src: 'assets/images/leaflet.png',
      alt: 'Leaflet Logo',
    },
    {
      src: 'assets/images/nodejs.png',
      alt: 'Node.js Logo',
    },

    {
      src: 'assets/images/nginx.png',
      alt: 'Nginx Logo',
    },
  ];
}
