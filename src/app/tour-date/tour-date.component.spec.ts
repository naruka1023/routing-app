import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDateComponent } from './tour-date.component';

describe('TourDateComponent', () => {
  let component: TourDateComponent;
  let fixture: ComponentFixture<TourDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
