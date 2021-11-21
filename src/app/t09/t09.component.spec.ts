import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T09Component } from './t09.component';

describe('T09Component', () => {
  let component: T09Component;
  let fixture: ComponentFixture<T09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T09Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
