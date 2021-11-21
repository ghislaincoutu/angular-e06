import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T08Component } from './t08.component';

describe('T08Component', () => {
  let component: T08Component;
  let fixture: ComponentFixture<T08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T08Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
