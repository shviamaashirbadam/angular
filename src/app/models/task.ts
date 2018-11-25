export class Task {
     taskId:number;
     taskName:string;
     assignedTo:string;
     comments:string;
     status:string;
    constructor(taskId:number,taskName:string,assignedTo:string, comments:string, status:string){
       this.taskId=0;
       this.taskName=taskName;
       this.assignedTo=assignedTo;
       this.comments=comments;
       this.status=status;
    }
}
