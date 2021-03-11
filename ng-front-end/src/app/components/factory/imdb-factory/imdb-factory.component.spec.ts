import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbFactoryComponent } from './imdb-factory.component';

describe('ImdbFactoryComponent', () => {
  let component: ImdbFactoryComponent;
  let fixture: ComponentFixture<ImdbFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdbFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdbFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
