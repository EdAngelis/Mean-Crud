import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service'
import { NgForm } from '@angular/forms';
import { Employees } from 'src/app/models/employees';

declare var M : any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeesService]
})
export class EmployeesComponent implements OnInit {

  constructor(private EmployeesService: EmployeesService  ) { }

  ngOnInit() {
    this.getEmployees()
  }

  addEmployee(form: NgForm){
    if(form.value._id){
      this.EmployeesService.putEmployee(form.value)
      .subscribe(res =>{
        M.toast({html: 'Empregado Atualizado com Sucesso'})
      })
    }
    else {this.EmployeesService.postEmployess(form.value)
      .subscribe(res=>{
        this.resetForm(form);
        M.toast({html: 'Empregado guardado com Sucesso'});
        this.getEmployees()
      })
    }
  }
  

  resetForm(form?:NgForm){
    if (form){
      form.reset();
      this.EmployeesService.selectedEmployee = new Employees();

      
    }
  };

  getEmployees(){
    this.EmployeesService.getEmployess()
    .subscribe( res => {
      this.EmployeesService.empregados = res as Employees []
      console.log(res)
    })
  }

  editEmployee(empregados: Employees){
    this.EmployeesService.selectedEmployee = empregados
  }

  deleteEmployee(_id: string){
    if(confirm("Tem certeza que deseja remover o empregado?")){
      this.EmployeesService.deleteEmployee(_id)
    .subscribe(res => {
      this.getEmployees()
      M.toast({html: 'Empregado Removido com Sucesso'})
    })
    }
    
    
  }
}
