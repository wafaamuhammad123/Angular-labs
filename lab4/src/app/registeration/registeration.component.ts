import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css'],
})
export class RegisterationComponent {
  validationForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    age: new FormControl(null, [Validators.min(20), Validators.max(40)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  get nameValid() {
    return this.validationForm.controls['name'].valid;
  }

  get AgeValid() {
    return this.validationForm.controls['age'].valid;
  }

  get emailValid() {
    return this.validationForm.controls['email'].valid;
  }
  
  hideName() {
    return this.validationForm.controls["name"].value;
  }
  hideEmail() {
    return this.validationForm.controls["email"].value;
  }

  add() {
    if (this.validationForm.valid) {
      alert('Congrats! you just added a new student');
    }
    else {
      alert("Invalid data");
    }
  }
}
// console.log("Form Value: ",this.validationForm.value);
// console.log("Form Valid: ",this.validationForm.valid);