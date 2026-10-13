import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterPage {
  private navCtrl = inject(NavController);
  private router = inject(Router);

  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';

  async onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Hindi magkatugma ang password at confirm password!');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
      console.log('Registration successful:', userCredential.user);
      // I-redirect patungong explore page pagkatapos mag-register
      this.router.navigate(['/explore']);
    } catch (error: any) {
      console.error('Registration error:', error.message);
      alert('May error sa pag-rehistro: ' + error.message);
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goBack() {
    this.navCtrl.back();
  }
}