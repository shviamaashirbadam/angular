import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../../services/gateway.service';
import { Router } from '@angular/router';
import { Login } from '../../models/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private gatewatservice: GatewayService, private router: Router) { }
  username: string;
  password: string;
  login: Login;
  message :string;
  loginElkhorn(): void {
    //Need to make sure we are calling the right function from the services
    //Step one we are login to the web page then using the login ID as key
    this.gatewatservice.accountLogin(this.username, this.password).subscribe(
      (returnAccount: Login) => {
        this.login = returnAccount;
        //console.log(this.username);
       // console.log(this.login);        
        sessionStorage.setItem('loginId', JSON.stringify(this.login.loginId));
       // console.log('test');  
        this.router.navigate(['navbar']);    
         }, error => { console.log(`Error: ${JSON.stringify(error)}`); }
    )
    
  }

  ngOnInit() {

  };


}







