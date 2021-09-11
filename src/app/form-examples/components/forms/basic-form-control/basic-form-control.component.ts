import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ExampleDataService} from "../../../services/example-data.service";

@Component({
  selector: 'app-basic-form-control',
  templateUrl: './basic-form-control.component.html',
  styleUrls: ['./basic-form-control.component.scss']
})
export class BasicFormControlComponent implements OnInit {

  cardNumber = new FormControl('', Validators.required);
  submittedCardNumber: string = '';

  constructor(private readonly dataService: ExampleDataService) {
  }

  ngOnInit(): void {
    this.dataService.getDefaultCardNumber().subscribe(n => {
      this.cardNumber.setValue(n);
    })
  }

  updateCardNumber() {
    this.dataService.updateCardNumber(this.cardNumber.value).subscribe(n => {
      this.submittedCardNumber = n;
    })
  }
}
