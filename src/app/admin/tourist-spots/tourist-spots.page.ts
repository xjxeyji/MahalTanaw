import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-tourist-spots',
  templateUrl: './tourist-spots.page.html',
  styleUrls: ['./tourist-spots.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TouristSpotsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
