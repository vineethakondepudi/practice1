import { Component, Input, SimpleChange } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pra1Service } from '../services/pra1.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent {
  @Input() sampleChanges: string = '';
  private mySubscription : Subscription;

constructor( private service:Pra1Service){
  console.log("Constructor");
  this.mySubscription = interval(3000).subscribe((count)=>{
    console.log(`Count:${count}`);
    
  })
}
ngOnChanges(changes:SimpleChange){
  console.log("ngOnChanges",changes);
  
}
ngOnInit(){
this.service.getAsyncData().subscribe((res)=>{
  console.log(res);
  console.log("ngOnInit");
  
});


}
ngDoCheck(){
  console.log("ngDoCheck");
  
}
ngOnDestroy(){
  this.mySubscription.unsubscribe();
  console.log("ngOnDestroy");
  
}
}
