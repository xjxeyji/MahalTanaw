import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-tourist-spot',
  templateUrl: './tourist-spot.page.html',
  styleUrls: ['./tourist-spot.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TouristSpotPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
