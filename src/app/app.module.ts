import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GatewayService } from './services/gateway.service';
import { HttpClientModule } from '@angular/common/http';
import {FormControl} from '@angular/forms'
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { catchError, map, tap,retry } from 'rxjs/operators'
import { error } from 'protractor';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { JavaComponent } from './java/java.component';
import { HibernateComponent } from './hibernate/hibernate.component';
import { AboutmeComponent } from './aboutme/aboutme.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    NotesComponent,
    AddtaskComponent,
    JavaComponent,
    HibernateComponent,
    AboutmeComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule
    
  ],
  providers: [GatewayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
