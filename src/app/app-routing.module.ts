import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TimetableComponent } from './timetable/timetable.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent ,pathMatch:'full'},
  { path: 'about', component: AboutComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
