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
  message: string;
  loginElkhorn(): void {

    this.gatewatservice.accountLogin(this.username, this.password).subscribe(
      (returnAccount: Login) => {
        this.login = returnAccount;

        sessionStorage.setItem('loginId', JSON.stringify(this.login.loginId));

        this.router.navigate(['navbar']);
      }, error => { console.log(`Error: ${JSON.stringify(error)}`); }
    )

  }

  ngOnInit() {

  };


}







