import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T07Component } from './t07.component';

describe('T07Component', () => {
  let component: T07Component;
  let fixture: ComponentFixture<T07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T07Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
