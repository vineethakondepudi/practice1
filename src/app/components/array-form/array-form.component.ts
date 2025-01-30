import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-array-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: new FormControl('', Validators.required),
      address: this.fb.array([])
    })
  }
  

  get address(){
   return this.myForm.get('address') as FormArray;
  }

  addAddress(){
this.address.push(this.fb.control('', Validators.required))
  }

  removeAddress(index:number){
this.address.removeAt(index)
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      console.log("Form is invalid");
      
    }
  }
}
