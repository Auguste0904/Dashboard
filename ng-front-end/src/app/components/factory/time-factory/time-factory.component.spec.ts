import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeFactoryComponent } from './time-factory.component';

describe('TimeFactoryComponent', () => {
  let component: TimeFactoryComponent;
  let fixture: ComponentFixture<TimeFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
