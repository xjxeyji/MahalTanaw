import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  mapOutline, 
  compassOutline, 
  heartOutline, 
  personOutline, 
  logOutOutline, 
  chatbubbleOutline,
  sparklesOutline 
} from 'ionicons/icons';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '../../../services/firebase.service';

@Component({
  selector: 'app-user-dash',
  templateUrl: './userDash.page.html',
  styleUrls: ['./userDash.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserDashPage implements OnInit {
  private router = inject(Router);
  currentUser: User | null = null;
  userEmail: string = 'Explorer';

  constructor() {
    addIcons({ 
      mapOutline, 
      compassOutline, 
      heartOutline, 
      personOutline, 
      logOutOutline, 
      chatbubbleOutline,
      sparklesOutline 
    });
  }

  ngOnInit() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.currentUser = user;
        this.userEmail = user.email || 'Explorer';
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  async logout() {
    try {
      await signOut(auth);
      this.router.navigate(['/login']);
    } catch (error: any) {
      console.error('Logout error:', error.message);
    }
  }
}