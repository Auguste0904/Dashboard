import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidTotalFactoryComponent } from './covid-total-factory.component';

describe('CovidTotalFactoryComponent', () => {
  let component: CovidTotalFactoryComponent;
  let fixture: ComponentFixture<CovidTotalFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidTotalFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidTotalFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
