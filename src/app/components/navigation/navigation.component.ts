import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit , DoCheck {

  
  constructor(private router: Router) { }

  loginId: String;

  ngOnInit() {
  }

  ngDoCheck() {
    this.loginId = sessionStorage.getItem('loginId');
  }
  
  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  about(){
    this.router.navigate(['/aboutme']);
  }
  taskList(){
    this.router.navigate(['/notes']);
  }
  addTask(){
    this.router.navigate(['/addtask']);
  }
  hibernate(){
    this.router.navigate(['/hibernate']);
  }
  java(){
    this.router.navigate(['/java']);
  }
}
