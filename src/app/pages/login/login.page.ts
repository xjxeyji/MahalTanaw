import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPage {
  private navCtrl = inject(NavController);
  private router = inject(Router);

  email = '';
  password = '';

  // Ilagay dito ang mga email na gusto mong maging Admin
  private adminEmails = [
    'admin@mahaltanaw.com',
    'cj.berdera@admin.com'
  ];

  async onLogin() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
      const user = userCredential.user;
      console.log('Login successful:', user.email);

      const userEmail = user.email ? user.email.toLowerCase() : '';
      const isAdmin = this.adminEmails.includes(userEmail) || userEmail.includes('admin');

      if (isAdmin) {
        console.log('Redirecting to Admin Dashboard...');
        this.router.navigate(['/dashboard']);
      } else {
        console.log('Redirecting to User Dashboard...');
        this.router.navigate(['/userDash']);
      }

    } catch (error: any) {
      console.error('Login error:', error.message);
      alert('May error sa pag-log in: ' + error.message);
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goBack() {
    this.navCtrl.back();
  }
}