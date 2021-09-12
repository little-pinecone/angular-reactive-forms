import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BasicFormControlComponent} from './basic-form-control.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MockProvider, ngMocks} from "ng-mocks";
import {ExampleDataService} from "../../../services/example-data.service";
import {of} from "rxjs";

describe('BasicFormControlComponent', () => {
  let component: BasicFormControlComponent;
  let fixture: ComponentFixture<BasicFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicFormControlComponent],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        MockProvider(ExampleDataService, {
          getDefaultCardNumber: () => of('123'),
          updateCardNumber: () => of('456')
        })
      ]
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

  it('should create with default card number', () => {
    expect(component.cardNumber.value).toEqual('123');
  });

  it('should update submitted card number', () => {
    expect(component.submittedCardNumber).toEqual('');

    ngMocks.click('button');

    expect(component.submittedCardNumber).toEqual('456');
  });
});
