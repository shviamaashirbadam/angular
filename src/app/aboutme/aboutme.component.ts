import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js'
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  // title= 'Dashboard';
  chart = [];

  constructor() { }

  ngOnInit() { }

  title = 'DevOps';
  public pieChartLabels: string[] = ["Amazon Web Service (EC2)", "GIT", "Docker", "Pivotal Cloud Services", "Sonarcube",
"Jenkins","putty","Maven"];
  public pieChartData: number[] = [6, 6, 6, 6, 6, 6, 6,6];
  public pieChartType: string = 'pie';
  public pieChartOptions: any = {
    'backgroundColor': [
      "#FF6384",
      "#4BC0C0",
      "#FFCE56",
      "#E7E9ED",
      "#36A2EB",
          ]
  }
  title1 = 'JavaWeb';
  public pieChartLabels1: string[] = ["SpringMVC", "ServletAPI", "Springboot", "SpringRest", "Jacksion",
   "Spring Cloud", "Microservice", "Eureka","Hystrix","Maven"];
  public pieChartData1: number[] = [1, 1, 1, 1, 1,1,1,1,1,1];
  public pieChartType1: string = 'pie';
  public pieChartOptions1: any = {
    'backgroundColor': [
      "#FF6384",
      "#4BC0C0",
      "#FFCE56",
      "#E7E9ED",
      "#36A2EB"
    ]
  }


  title2 = 'Languages';
  public pieChartLabels2: string[] = ["Java", "Oracle SQL", "HTML", "CSS", "JavaScript", "TypeScript"];
  public pieChartData2: number[] = [1, 1, 1, 1, 1,1];
  public pieChartType2: string = 'pie';
  public pieChartOptions2: any = {
    'backgroundColor': [
      "#FF6384",
      "#4BC0C0",
      "#FFCE56",
      "#E7E9ED",
      "#36A2EB"
    ]
  }

  title3 = 'Web Technologies';
  public pieChartLabels3: string[] = ["HTML", "Angiular", "SOAP", "Rest API", "CSS"];
  public pieChartData3: number[] = [1, 1, 1, 1, 1];
  public pieChartType3: string = 'pie';
  public pieChartOptions3: any = {
    'backgroundColor': [
      "#FF6384",
      "#4BC0C0",
      "#FFCE56",
      "#E7E9ED",
      "#36A2EB"
    ]
  }

  title4 = 'Database Technologies';
  public pieChartLabels4: string[] = ["Oracle SQL", "Spring ORM", "Spring Hibernate", "Spring Data", "H2"];
  public pieChartData4: number[] = [1, 1, 1, 1, 1,1];
  public pieChartType4: string = 'pie';
  public pieChartOptions4: any = {
    'backgroundColor': [
      "#FF6384",
      "#4BC0C0",
      "#FFCE56",
      "#E7E9ED",
      "#36A2EB"
    ]
  }
  // events on slice click
  public chartClicked(e: any): void {
    console.log(e);
  }

  // event on pie chart slice hover
  public chartHovered(e: any): void {
    console.log(e);
  }




}
