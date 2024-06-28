import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T05Component } from './t05.component';

describe('T05Component', () => {
  let component: T05Component;
  let fixture: ComponentFixture<T05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T05Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
