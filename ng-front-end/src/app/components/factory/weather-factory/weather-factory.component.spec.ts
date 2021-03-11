import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFactoryComponent } from './weather-factory.component';

describe('WeatherFactoryComponent', () => {
  let component: WeatherFactoryComponent;
  let fixture: ComponentFixture<WeatherFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
