import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ExampleDataService} from "../../../services/example-data.service";

@Component({
  selector: 'app-basic-form-control',
  templateUrl: './basic-form-control.component.html',
  styleUrls: ['./basic-form-control.component.scss']
})
export class BasicFormControlComponent implements OnInit {

  submittedCardNumber: string = '';

  cardForm = this.formBuilder.group({
    cardNumber: ['', Validators.required]
  })

  constructor(private readonly dataService: ExampleDataService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.dataService.getDefaultCardNumber().subscribe(n => {
      this.cardForm.setValue({
        cardNumber: n
      });
    })
  }

  updateCardNumber() {
    let newValue = this.cardForm.value.cardNumber;

    this.dataService.updateCardNumber(newValue).subscribe(n => {
      this.submittedCardNumber = n;
    })
  }
}
