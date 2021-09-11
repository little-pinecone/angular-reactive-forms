import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DefaultLayoutComponent} from './default-layout.component';
import {MockComponent} from "ng-mocks";
import {TopNavComponent} from "../top-nav/top-nav.component";
import {PageContentComponent} from "../page-content/page-content.component";
import {FooterComponent} from "../footer/footer.component";

describe('DefaultLayoutComponent', () => {
  let component: DefaultLayoutComponent;
  let fixture: ComponentFixture<DefaultLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DefaultLayoutComponent,
        MockComponent(TopNavComponent),
        MockComponent(PageContentComponent),
        MockComponent(FooterComponent)
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
