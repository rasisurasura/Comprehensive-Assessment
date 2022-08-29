import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient:Patient = new Patient();
 
  message:any;
  doctors:any;
  doctorinfo:any;


  constructor(private patService:PatientService,private service:DoctorService,private router:Router) { }

  ngOnInit(): void {

    let response = this.service.getAllDoctors();
    response.subscribe((data)=>this.doctors=data);
  }

  public registerPatNow(){
    let response = this.patService.createPatient(this.patient);
    response.subscribe((data)=>this.message=data);
    this.router.navigate(['']);

  }
  selectName(pid :number){
   
    let response= this.service.getDoctorbyId(pid);
    response.subscribe((data)=>this.doctorinfo=data);


  
    
    console.log("id--->",pid);
    console.log("doctors--->",this.doctorinfo.docName);
  
   }

}
