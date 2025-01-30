import { Component } from '@angular/core';
import { PracticeComponent } from '../practice/practice.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practice2',
  standalone: true,
  imports: [ PracticeComponent, CommonModule ],
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css']
})
export default class Practice2Component {
  message = "Hello";
  isVisible = true;

  handleChange(){
    this.message = "New Message";
    // this.isVisible = !this.isVisible;
  }
}
