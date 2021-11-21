import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T12Component } from './t12.component';

describe('T12Component', () => {
  let component: T12Component;
  let fixture: ComponentFixture<T12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
