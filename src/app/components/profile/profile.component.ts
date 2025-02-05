import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { canComponentDeactivate } from '../auth-deactivate.guard';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements canComponentDeactivate {
isDirty : boolean = true;

canDeactivate(): boolean {
if(this.isDirty){
return confirm('You have unsaved changes! Do you really want to leave')
}
return true;
}
}
