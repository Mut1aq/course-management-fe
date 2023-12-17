import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LogoI } from './interfaces/logo.interface';

@Component({
  selector: 'app-home-technologies',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home-technologies.component.html',
  styleUrl: './home-technologies.component.scss',
})
export class HomeTechnologiesComponent {
  logos: LogoI[] = [
    {
      src: 'assets/images/nestjs.svg',
      alt: 'NestJS Logo',
      name: 'NestJS',
      websiteLink: 'https://nestjs.com/',
    },
    {
      src: 'assets/images/angular.png',
      alt: 'Angular Logo',
      name: 'Angular',
      websiteLink: 'https://angular.dev/',
    },
    {
      src: 'assets/images/postgresql.png',
      alt: 'PostgreSQL Logo',
      name: 'PostgreSQL',
      websiteLink: 'https://www.postgresql.org/',
    },
    {
      src: 'assets/images/flutter.png',
      alt: 'Flutter Logo',
      name: 'Flutter',
      websiteLink: 'https://flutter.dev/',
    },
    {
      src: 'assets/images/mongodb.png',
      alt: 'MongoDB Logo',
      name: 'MongoDB',
      websiteLink: 'https://www.mongodb.com/',
    },
    {
      src: 'assets/images/leaflet.png',
      alt: 'Leaflet Logo',
      name: 'Leaflet',
      websiteLink: 'https://leafletjs.com/',
    },
    {
      src: 'assets/images/nodejs.png',
      alt: 'Node.js Logo',
      name: 'Node.js',
      websiteLink: 'https://nodejs.org/en',
    },

    {
      src: 'assets/images/nginx.png',
      alt: 'Nginx Logo',
      name: 'Nginx',
      websiteLink: 'https://www.nginx.com/',
    },
  ];
}
