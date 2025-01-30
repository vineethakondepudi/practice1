import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycle1Component } from './life-cycle1.component';

describe('LifeCycle1Component', () => {
  let component: LifeCycle1Component;
  let fixture: ComponentFixture<LifeCycle1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LifeCycle1Component]
    });
    fixture = TestBed.createComponent(LifeCycle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
