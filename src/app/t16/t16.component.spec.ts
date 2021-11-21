import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T16Component } from './t16.component';

describe('T16Component', () => {
  let component: T16Component;
  let fixture: ComponentFixture<T16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
