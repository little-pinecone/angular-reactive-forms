import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormControlComponent } from './basic-form-control.component';

describe('BasicFormControlComponent', () => {
  let component: BasicFormControlComponent;
  let fixture: ComponentFixture<BasicFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
