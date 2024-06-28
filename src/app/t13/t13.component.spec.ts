import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T13Component } from './t13.component';

describe('T13Component', () => {
  let component: T13Component;
  let fixture: ComponentFixture<T13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
