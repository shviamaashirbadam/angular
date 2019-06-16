import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GatewayService } from './services/gateway.service';
import { HttpClientModule } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { catchError, map, tap, retry } from 'rxjs/operators'
import { error } from 'protractor';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { JavaComponent } from './java/java.component';
import { HibernateComponent } from './hibernate/hibernate.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AngularTutorialComponent } from './angular-tutorial/angular-tutorial.component';
import { DevOpsComponent } from './dev-ops/dev-ops.component';

import { Ng6O2ChartModule } from 'ng6-o2-chart';

import * as  ChartConst from 'ng6-o2-chart';
import { AddContentComponent } from './add-content/add-content.component';

import {AccordionModule} from 'primeng/accordion';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


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
    AngularTutorialComponent,
    DevOpsComponent,
    AddContentComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    Ng6O2ChartModule,
    AccordionModule,
    BrowserAnimationsModule




  ],
  providers: [GatewayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
