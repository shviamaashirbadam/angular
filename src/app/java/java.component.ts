import { Component, OnInit } from '@angular/core';
import { Ng6O2ChartModule } from 'ng6-o2-chart';
import * as  ChartConst from 'ng6-o2-chart';

import { Chart } from 'chart.js'
import { isFulfilled } from 'q';
import { Tutorial } from '../models/tutorial';
import { GatewayService } from '../services/gateway.service';
import { Router } from '@angular/router';
import {AccordionModule} from 'primeng/accordion';


@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent {

  id: number;
  topic: string;
  question: string;
  answer: string;
  demo: string;
  public addtutorial: Tutorial;
  public listOfJavaQuestions: Tutorial[];


  ngOnInit() {
    this.dashBoard();
  }

  constructor(private gatewatservice: GatewayService, private router: Router) {
  }


  dashBoard(): void {
    this.gatewatservice.getListofTutorial().subscribe(
      (Test: Tutorial[]) => {
        this.listOfJavaQuestions = Test;
        console.log(Test);
      },
      error => console.log('error'));

  }





}




