import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TopNavComponent} from './top-nav.component';
import {NgbCollapse} from "@ng-bootstrap/ng-bootstrap";

describe('TopNavComponent', () => {
  let component: TopNavComponent;
  let fixture: ComponentFixture<TopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TopNavComponent,
        NgbCollapse
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
