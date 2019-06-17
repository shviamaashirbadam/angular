import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, DoCheck {


  constructor(private router: Router) { }

  loginId: String;

  ngOnInit() {
  }

  login(){

    this.router.navigate(['/login']);
  }

  ngDoCheck() {
    this.loginId = sessionStorage.getItem('loginId');
  }


  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  about() {
    this.router.navigate(['/aboutme']);
  }
  java() {
    this.router.navigate(['/java']);
  }
  hibernate() {
    this.router.navigate(['/hibernate']);
  }
 
  angular() {
    this.router.navigate(['/angular']);
  }
  addcontent() {
    this.router.navigate(['/addcontent']);
  }
  devOps() {
    this.router.navigate(['/DevOps']);
  }
  

}
