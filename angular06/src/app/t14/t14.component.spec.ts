import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T14Component } from './t14.component';

describe('T14Component', () => {
  let component: T14Component;
  let fixture: ComponentFixture<T14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
