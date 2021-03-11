import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimezoneFactoryComponent } from './timezone-factory.component';

describe('TimezoneFactoryComponent', () => {
  let component: TimezoneFactoryComponent;
  let fixture: ComponentFixture<TimezoneFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimezoneFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimezoneFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
