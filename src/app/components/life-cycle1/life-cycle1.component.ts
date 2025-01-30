import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCycleComponent } from '../life-cycle/life-cycle.component'

@Component({
  selector: 'app-life-cycle1',
  standalone: true,
  imports: [CommonModule,LifeCycleComponent],
  templateUrl: './life-cycle1.component.html',
  styleUrls: ['./life-cycle1.component.css']
})
export class LifeCycle1Component {
message="Hello";
isVisible = true;

handleChange(){
  this.message = "New Message";
  this.isVisible = !this.isVisible;
}
}
