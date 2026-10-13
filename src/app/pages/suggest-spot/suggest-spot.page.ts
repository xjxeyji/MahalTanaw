import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-suggest-spot',
  templateUrl: './suggest-spot.page.html',
  styleUrls: ['./suggest-spot.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SuggestSpotPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
