import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent implements OnInit {
  radio!: FormGroup;
  valueSelected: string = 'after';

  constructor(private fb: FormBuilder) {
    this.busca();
  }

  ngOnInit(): void {
    this.radio.get('escolha')?.valueChanges.subscribe((value) => {
      this.valueSelected = value;
    });
  }

  busca() {
    this.radio = this.fb.group({
      escolha: 'after',
    });
  }
}
