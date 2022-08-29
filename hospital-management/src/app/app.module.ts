import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { ShowPatientComponent } from './show-patient/show-patient.component';
import { ShowDoctorComponent } from './show-doctor/show-doctor.component';
import { ViewDoctorInfoComponent } from './view-doctor-info/view-doctor-info.component';
import { FormsModule } from '@angular/forms';
import { ViewAllDoctorsComponent } from './view-all-doctors/view-all-doctors.component';
import { HomeComponent } from './home/home.component';
import { ComponentNotFoundComponent } from './component-not-found/component-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePatientComponent,
    CreateDoctorComponent,
    ShowPatientComponent,
    ShowDoctorComponent,
    ViewDoctorInfoComponent,
    ViewAllDoctorsComponent,
    HomeComponent,
    ComponentNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
