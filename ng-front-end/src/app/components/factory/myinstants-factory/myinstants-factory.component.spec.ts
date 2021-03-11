import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyinstantsFactoryComponent } from './myinstants-factory.component';

describe('MyinstantsFactoryComponent', () => {
  let component: MyinstantsFactoryComponent;
  let fixture: ComponentFixture<MyinstantsFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyinstantsFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyinstantsFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
