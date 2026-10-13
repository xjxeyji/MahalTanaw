import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TouristSpotsPage } from './tourist-spots.page';

describe('TouristSpotsPage', () => {
  let component: TouristSpotsPage;
  let fixture: ComponentFixture<TouristSpotsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristSpotsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
