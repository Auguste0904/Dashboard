import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyinstantComponent } from './myinstant.component';

describe('MyinstantComponent', () => {
  let component: MyinstantComponent;
  let fixture: ComponentFixture<MyinstantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyinstantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyinstantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
