import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../models/tutorial';
import { GatewayService } from '../services/gateway.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dev-ops',
  templateUrl: './dev-ops.component.html',
  styleUrls: ['./dev-ops.component.css']
})
export class DevOpsComponent implements OnInit {

  public listOfQuestions: Tutorial[];
  ngOnInit() {
    this.dashBoard("DevOps");
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
