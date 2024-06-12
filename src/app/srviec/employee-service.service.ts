import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  constructor(private http: HttpClient ) {}  

addEmployee(data: any):Observable<any>
{
 return this.http.post('localhost:3000/employee', data);
}


}
