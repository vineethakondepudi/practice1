import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartType } from 'chart.js';
import { NgChartsModule, BaseChartDirective } from 'ng2-charts';
import { Pra1Service } from '../services/pra1.service';
export interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }>;
}
@Component({
  selector: 'app-practice1',
  standalone: true,
  imports:[FormsModule, CommonModule, NgChartsModule],
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export default class Practice1Component {
name="Vineetha";
imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIwi8VETj5HmOl3b9IN7WqOvXOw3VbB9NzxA&s";
number=0;
names: string = 'Kondepudi';
increase(){
this.number++;
this.value = !this.value
}
ngIfs:boolean=true;
items=["apple", "banana", "cherry"];
  value:boolean=false;
  color:string="red";
  isActive: boolean = true;
  isInActive:boolean=true;
  today: Date = new Date;
  chartData: ChartData | any = null;
  constructor(private service:Pra1Service){}
  ngOnInit(){
    this.getChartsData();
  }
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @ViewChild(BaseChartDirective) piechart: BaseChartDirective | undefined;
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData = {
    labels: [],
    datasets: [
      {
        label: 'Sales',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  };


  getChartsData(): void {
    this.service.getChartData().subscribe(
      (res) => {
        this.barChartData = res as ChartData; 
        this.chart?.update();
      },
      (err) => console.error(err)
    );
  }
  
  
}
