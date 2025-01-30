import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'

@Component({
  selector: 'app-data-set',
  standalone: true,
  imports: [ MatTableModule ],
  templateUrl: './data-set.component.html',
  styleUrls: ['./data-set.component.css']
})
export class DataSetComponent {
displayedColumns: string[] = ['id','name','email'];

 dataSource = [
  {id:1, name:"John", email:"john@gmail.com"},
  {id:2, name:"Merry", email:"merry@gmail.com"},
  {id:3, name:"Conne", email:"conne@gmail.com"},
  {id:4, name:"Sheldon", email:"cooper@gmail.com"}
]
}
