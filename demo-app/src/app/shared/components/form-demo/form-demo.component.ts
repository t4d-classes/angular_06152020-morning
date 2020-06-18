import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { myRequired } from '../../validators/myRequired';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  contactForm: FormGroup;

  get showFullNameValidationMessage() {
    const fullNameInput = this.contactForm.get('fullName');
    return fullNameInput.touched && fullNameInput.invalid;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      fullName: [
        '',
        { validators: [ myRequired ] },
      ],
    });
  }

}
