import { Component, Input, SimpleChanges } from '@angular/core';
import { Pra1Service } from '../services/pra1.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-practice',
  standalone: true,
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
@Input() sampleChage : string = '';
private mySubscription: Subscription;

constructor(private Service:Pra1Service){
  console.log("First Initiated");
  this.mySubscription = interval(3000).subscribe((count)=>{
    console.log(`Count:${count}`);
    
  })
} 

ngOnChanges(changes: SimpleChanges){
  console.log("Second Initiated", changes);
  
} 
ngOnInit(){
   console.log("Third Initiated");
   
} 
ngDoCheck(){
  console.log("Fourth Initiated");
  
}
// ngAfterContentInit(){
//   console.log("Fifth Initiated");
  
// }
// ngAfterContentChecked(){
//   console.log("Sixth Initiated");
  
// }
// ngAfterViewInit(){
//   console.log("Seventh Initiated");
  
// }
// ngAfterViewChecked(){
//   console.log("Eighth Initiated");
  
// }
ngOnDestroy(){
  console.log("Deleted");
  this.mySubscription.unsubscribe();
}
}
