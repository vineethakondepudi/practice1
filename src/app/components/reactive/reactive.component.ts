import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder  } from '@angular/forms';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports:[ ReactiveFormsModule ],
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
myForm: FormGroup

constructor(private fb:FormBuilder){
  this.myForm = this.fb.group({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
}


handleChange(){
 console.log(this.myForm.value);
}

}