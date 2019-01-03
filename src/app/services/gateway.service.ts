import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { Login } from '../models/login';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Task } from '../models/task';

import { catchError, map, tap } from 'rxjs/operators'
import { error } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class GatewayService {
  constructor(private httpClient: HttpClient) { }  
  private backendUrl = 'http://ec2-18-220-88-66.us-east-2.compute.amazonaws.com:8084';

  private backendUrlNote ='http://localhost:8085';

  private Geodata = "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json";
  
  

  public accountLogin(username: string, password: string): Observable<Login> {
    return this.httpClient.post<Login>(`${this.backendUrl}/account/login`,
      { 'username': username, 'password': password });
  }
  
public getTask(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.backendUrlNote}/task/all`);
  }

  public deleteTaskById(taskId:number): Observable<Task> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');   
    let options = {headers: headers};  
    return this.httpClient.post<Task>(`${this.backendUrlNote}/task/delete`,
    taskId,options);
    //There was the issue while sending the info as a Json 
    //before it was {taskId:taskId}, which was causing the issue 
    
  }

  public postTask(taskName:string , assignedTo:string , comments:string , status:string):Observable<Task> {
    const data:Task ={
      taskId:0,
      taskName:taskName,
      assignedTo:assignedTo,
      comments:comments,
      status:status

    }
    console.log("I am at post", taskName);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');   
    let options = {headers: headers};  
    console.log("I am here");    
    
    return this.httpClient.post<Task>(`${this.backendUrlNote}/task/add`,{
      'taskName':taskName,
      'assignedTo':assignedTo,
      'comments':comments,
      'status':status
    });
     
    
  }
}

  
