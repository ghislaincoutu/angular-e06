import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T15Component } from './t15.component';

describe('T15Component', () => {
  let component: T15Component;
  let fixture: ComponentFixture<T15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
