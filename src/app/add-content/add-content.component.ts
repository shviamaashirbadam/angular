import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../models/tutorial';
import { GatewayService } from '../services/gateway.service';
import { Router } from '@angular/router';
import {EditorModule} from 'primeng/editor';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {

  id: number;
  topic: string;
  tag:Set<string>;
  question: string;
  answer: string;
  demo: string;
  public addtutorial: Tutorial;
  


  ngOnInit() {    
  
  }

  constructor(private gatewatservice: GatewayService, private router: Router) {
  }
  addTutorial(): void {
    let id = this.id;
    let topic = this.topic;
    let question = this.question;
    let answer = this.answer;
    let demo = this.demo;
    this.gatewatservice.addQA(id, topic, question, answer, demo).subscribe(
      (data: Tutorial) => {
        this.addtutorial = data;
        
      }
    );
  }


}
