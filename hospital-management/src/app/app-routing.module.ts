import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { HomeComponent } from './home/home.component';
import { ShowDoctorComponent } from './show-doctor/show-doctor.component';
import { ShowPatientComponent } from './show-patient/show-patient.component';
import { ViewDoctorInfoComponent } from './view-doctor-info/view-doctor-info.component';

const routes: Routes = [
  {path: 'create-doctor', component: CreateDoctorComponent},
  {path: 'create-patient', component: CreatePatientComponent},
  {path: '', redirectTo: 'AppComponent', pathMatch: 'full'},
  {path: 'show-patient', component: ShowPatientComponent},
  {path: 'show-doctor', component: ShowDoctorComponent},
  {path: 'view-doctor-info', component: ViewDoctorInfoComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
