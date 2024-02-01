import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FirstComponent, RouterLink],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-first></app-first>
    <button routerLink="/orders"> Orders </button>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'my-demo';
}
