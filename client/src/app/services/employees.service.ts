import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employees } from '../models/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  selectedEmployee: Employees;

  empregados: Employees[];

  readonly URL_SERVER = 'http://localhost:3000/employees'

  constructor(private http: HttpClient) { 
    this.selectedEmployee = new Employees()
  }

  getEmployess() {
    return this.http.get(this.URL_SERVER)
  }

  postEmployess(Empregado: Employees){
    return this.http.post(this.URL_SERVER, Empregado)
  }

  putEmployee(empregado:Employees){
    return this.http.put(this.URL_SERVER + `/${empregado._id}`, empregado)
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.URL_SERVER + `/${_id}`)
  }
}
