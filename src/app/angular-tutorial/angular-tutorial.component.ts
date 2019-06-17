import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../services/gateway.service';
import { Router } from '@angular/router';
import { Tutorial } from '../models/tutorial';
import {AccordionModule} from 'primeng/accordion';

@Component({
  selector: 'app-angular-tutorial',
  templateUrl: './angular-tutorial.component.html',
  styleUrls: ['./angular-tutorial.component.css']
})
export class AngularTutorialComponent implements OnInit {

  public listOfQuestions: Tutorial[];
  ngOnInit() {
    this.dashBoard("Angular");
  }

  constructor(private gatewatservice: GatewayService, private router: Router) {
  }


  dashBoard(topic:string): void {
    this.gatewatservice.getListofTutorial(topic).subscribe(
      (Test: Tutorial[]) => {
        this.listOfQuestions = Test;
        console.log(Test);
      },
      error => console.log(`Error: ${error}`));

  }

}
