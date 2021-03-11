import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidGlobalFactoryComponent } from './covid-global-factory.component';

describe('CovidGlobalFactoryComponent', () => {
  let component: CovidGlobalFactoryComponent;
  let fixture: ComponentFixture<CovidGlobalFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidGlobalFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidGlobalFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
