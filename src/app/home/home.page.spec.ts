import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  constructor() {}

  onExploreClick() {
    if ('vibrate' in navigator) {
      navigator.vibrate(25);
    }
    console.log('Tour button clicked for Puerto Galera, Oriental Mindoro!');
  }
}