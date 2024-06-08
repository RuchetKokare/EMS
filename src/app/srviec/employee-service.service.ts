import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService 
{



  private apiUrl = 'http://localhost:3000/Employee/';


  constructor(private http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
