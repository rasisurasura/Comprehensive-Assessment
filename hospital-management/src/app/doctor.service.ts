import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseURL = "http://localhost:8081/doctors";


  constructor(private httpClient: HttpClient) { }
  
  getDoctorList(): Observable<String[]>{
    return this.httpClient.get<String[]>(`${this.baseURL}`);
  }

  getAllDoctors(): Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.baseURL}/`);
  }

  createDoctor(doctor:Doctor): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, doctor);
  }
  getDoctorByName(name:String): Observable<Doctor>{
    return this.httpClient.get<Doctor>(`${this.baseURL}/${name}`);
  }

  getDoctorbyId(id:number):Observable<Doctor>{
    return this.httpClient.get<Doctor>(`${this.baseURL}/get/${id}`)
  }

}
