import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice2Component } from './practice2.component';

describe('Practice2Component', () => {
  let component: Practice2Component;
  let fixture: ComponentFixture<Practice2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practice2Component]
    });
    fixture = TestBed.createComponent(Practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
