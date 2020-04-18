import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TimetableComponent } from './timetable/timetable.component';


const routes: Routes = [
  {path: '',redirectTo:"home",pathMatch:"full"},
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  {path: 'timetable',component:TimetableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
