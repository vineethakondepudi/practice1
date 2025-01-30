import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  standalone: true,
  imports:[ReactiveFormsModule],
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent {
  myForm:FormGroup;

  constructor(private fb:FormBuilder){
 this.myForm = this.fb.group({
  name: new FormControl('',Validators.required),
 address: this.fb.group({
    dist: new FormControl('',Validators.required),
    mandal: new FormControl('',Validators.required),
  })
 })

  }

  handleChange(){
    console.log(this.myForm.value);
    
  }

}
