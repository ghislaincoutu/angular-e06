import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T06Component } from './t06.component';

describe('T06Component', () => {
  let component: T06Component;
  let fixture: ComponentFixture<T06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T06Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
