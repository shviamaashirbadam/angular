import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { GatewayService } from '../../services/gateway.service';
import { Router } from '@angular/router';
import { Login } from '../../models/login';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
   taskName:string;
   assignedTo:string;
   comments:string;
   status:string;
   addtask:Task;

   login:Login;
   constructor(private gatewatservice: GatewayService, private router: Router) { }
   
  addTask():void{   
    let TaskName = this.taskName;
    let AssignedTo =this.assignedTo;
    let Comments = this.comments;
    let Status = this.status;
    this.gatewatservice.postTask(TaskName,AssignedTo,Comments,Status).subscribe(
      (data:Task) => {
        this.addtask=data;
        this.router.navigate(['/notes']); 
        //If you want you can also print the value in the console as console.log(this.addtask)
        }        
    );    
  }
  ngOnInit() {
    console.log(this.login);
  }

}
