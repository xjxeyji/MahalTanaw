import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-my-submissions',
  templateUrl: './my-submissions.page.html',
  styleUrls: ['./my-submissions.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MySubmissionsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
