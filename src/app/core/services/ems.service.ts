import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Employee} from "./Employe";

@Injectable({
  providedIn: 'root'
})
export class EmsService {

  apiUrl = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  // surpressing "suppressImplicitAnyIndexErrors": true in tsconfig.json
  getAllEmployees(): Observable<Employee[]>{
    return this.http.get(`${this.apiUrl}`+'getAll').pipe(map(res => res['result']));
  }

  addEmployee(employee: any): any {
    return this.http.post(`${this.apiUrl}`+'addEmp', employee).pipe(map(res=> res));
  }

  updateEmployee(employe: any): any {
    return this.http.post(`${this.apiUrl}`+'updateEmp', employe).pipe(map(res=>res));
  }

  deleteEmployee(sapId: number): any {
    return this.http.get(`${this.apiUrl}`+ 'deleteEmp/'+ `${sapId}`).pipe(map(res=>res));
  }

}
