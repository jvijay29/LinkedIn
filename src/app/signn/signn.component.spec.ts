import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignnComponent } from './signn.component';

describe('SignnComponent', () => {
  let component: SignnComponent;
  let fixture: ComponentFixture<SignnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
