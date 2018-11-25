import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../../services/gateway.service';
import { Router } from '@angular/router';
import { Task } from '../../models/task';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit { 
 
   taskId:number;
   taskName:string;
   assignedTo:string;
   comments:string;
   status:string;  
   taskName1:string;
  
  public task:Task[];
  public task1:Task;

  constructor(private gatewatservice: GatewayService, private router: Router) { }
  
  dashBoard():void{   
    this.gatewatservice.getTask().subscribe(
      (TaskList :Task[]) =>{
        this.task=TaskList;            
        console.log(TaskList);       
      },
      error => console.log('error'));
       
  }  

  deleteTask(NoteItem: Task):void{    
    let id = NoteItem.taskId;
    console.log("I am trying to delete",id);
    this.gatewatservice.deleteTaskById(id).subscribe();
    this.router.navigate(['/navbar']);  
    
  }
 
  ngOnInit() {
   this.dashBoard();    
      }


}
