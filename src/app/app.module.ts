import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import { TimetableComponent } from './timetable/timetable.component';
import { HomeComponent } from './home/home.component';
import { UserDetailsPopupComponent } from './user-details-popup/user-details-popup.component';
import {MatTableModule} from '@angular/material/table';
import {CookieService} from 'ngx-cookie-service';
import {AuthGuard} from './auth.guard';
import { TimetablePopupComponent } from './timetable-popup/timetable-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    TimetableComponent,
    HomeComponent,
    UserDetailsPopupComponent,
    TimetablePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDividerModule,  
    MatMenuModule, 
    MatTableModule,
  ],
  providers: [CookieService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
