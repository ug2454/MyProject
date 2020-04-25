import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TimetableComponent } from './timetable/timetable.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent ,pathMatch:'full'},
  { path: 'about', component: AboutComponent, canActivate:[AuthGuard] },
  { path: 'timetable', component: TimetableComponent, canActivate:[AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
