import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../models/tutorial';
import { GatewayService } from '../services/gateway.service';
import { Router } from '@angular/router';
import {AccordionModule} from 'primeng/accordion';
@Component({
  selector: 'app-hibernate',
  templateUrl: './hibernate.component.html',
  styleUrls: ['./hibernate.component.css']
})
export class HibernateComponent implements OnInit {

  public listOfQuestions: Tutorial[];
  ngOnInit() {
    this.dashBoard("HiberNate");
  }

  constructor(private gatewatservice: GatewayService, private router: Router) {
  }


  dashBoard(topic: string): void {
    this.gatewatservice.getListofTutorial(topic).subscribe(
      (Test: Tutorial[]) => {
        this.listOfQuestions = Test;
        console.log(Test);
      },
      error => console.log(`Error: ${error}`));

  }

}
