import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = "http://localhost:8082/patients";


  constructor(private httpClient: HttpClient) { }
  
  getPatient(id:number): Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseURL}/${id}`);
  }

  createPatient(patient:Patient): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/`, patient);
  }
}
