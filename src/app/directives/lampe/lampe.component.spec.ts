import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LampeComponent } from './lampe.component';

describe('LampeComponent', () => {
  let component: LampeComponent;
  let fixture: ComponentFixture<LampeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
