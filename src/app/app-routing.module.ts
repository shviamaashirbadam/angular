import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotesComponent } from './components/notes/notes.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AngularTutorialComponent } from './angular-tutorial/angular-tutorial.component';
import { DevOpsComponent } from './dev-ops/dev-ops.component';
import { JavaComponent } from './java/java.component';
import { AddContentComponent } from './add-content/add-content.component';
import { HomeComponent } from './home/home.component';
import { HibernateComponent } from './hibernate/hibernate.component';



export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path: 'navbar', component: NavigationComponent},
  {path: 'java',component:JavaComponent},
  {path: 'hibernate',component:HibernateComponent},
  {path: 'aboutme',component:AboutmeComponent},
  {path:'angular', component:AngularTutorialComponent},
  {path:'DevOps', component:DevOpsComponent},
  {path:'addcontent', component:AddContentComponent}
   
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
