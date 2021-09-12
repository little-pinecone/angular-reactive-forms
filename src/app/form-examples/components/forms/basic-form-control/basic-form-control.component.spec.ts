import {BasicFormControlComponent} from './basic-form-control.component';
import {MockBuilder, MockedComponentFixture, MockRender, ngMocks} from "ng-mocks";
import {ExampleDataService} from "../../../services/example-data.service";
import {Observable, of} from "rxjs";
import {AppModule} from "../../../../app.module";
import {ReactiveFormsModule} from "@angular/forms";

function getComponent(fixture: MockedComponentFixture<BasicFormControlComponent, BasicFormControlComponent>) {
  return fixture.point.componentInstance;
}

function getForm(fixture: MockedComponentFixture<BasicFormControlComponent, BasicFormControlComponent>) {
  return getComponent(fixture).cardForm.value;
}

describe('BasicFormControlComponent', () => {

  let defaultCardMock: Observable<string>;
  let submittedCardMock: Observable<string>;

  function dataServiceMock() {
    return {
      getDefaultCardNumber: () => defaultCardMock,
      updateCardNumber: () => submittedCardMock
    };
  }

  beforeEach(() => {
    defaultCardMock = of('123');
    submittedCardMock = of('');

    return MockBuilder(BasicFormControlComponent, AppModule)
      .mock(ExampleDataService, dataServiceMock())
      .keep(ReactiveFormsModule);
  });

  it('should create', () => {
    const fixture = MockRender(BasicFormControlComponent);

    expect(getComponent(fixture)).toBeTruthy();
  });

  it('should create with default card number', () => {
    const fixture = MockRender(BasicFormControlComponent);

    expect(getForm(fixture).cardNumber).toEqual('123');
  });

  it('should create with default submitted card number', () => {
    const fixture = MockRender(BasicFormControlComponent);

    expect(getComponent(fixture).submittedCardNumber).toEqual('');
  });

  it('should replace default card number with value from input', () => {
    const fixture = MockRender(BasicFormControlComponent);

    ngMocks.change(
      'input',
      '456'
    );

    expect(getForm(fixture).cardNumber).toEqual('456');
  });

  it('should update submitted card number', () => {
    submittedCardMock = of('456');

    const fixture = MockRender(BasicFormControlComponent);

    ngMocks.click('button');

    expect(getComponent(fixture).submittedCardNumber).toEqual('456');
  });

  it('should disable form submit when empty input', () => {
    const fixture = MockRender(BasicFormControlComponent);

    ngMocks.change(
      'input',
      ''
    );

    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.querySelector('button').disabled).toBeTruthy();
  });

  it('should enable form submit when full input', () => {
    defaultCardMock = of('');
    const fixture = MockRender(BasicFormControlComponent);

    expect(fixture.debugElement.nativeElement.querySelector('button').disabled).toBeTruthy();

    ngMocks.change(
      'input',
      '456'
    );

    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.querySelector('button').disabled).toBeFalsy();
  });

});
