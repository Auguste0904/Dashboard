import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveFactoryComponent } from './drive-factory.component';

describe('DriveFactoryComponent', () => {
  let component: DriveFactoryComponent;
  let fixture: ComponentFixture<DriveFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
