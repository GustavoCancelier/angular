import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/model/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { FuncionarioComponent } from '../funcionario/funcionario.component';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  funcionarioForm: FormGroup;
  /* const id = id da url; */
  

  constructor(private funcionarioService: FuncionarioService, private funcionarioComponent: FuncionarioComponent) {
    this.funcionarioForm = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      filial: new FormControl(null, [Validators.required]),
      dataAdmissao: new FormControl(null, [Validators.required]),
      cargo: new FormControl(null, [Validators.required]),
      salario: new FormControl(null, [Validators.required])
    });  
   }
  

  salvarFuncionario() {
    if (this.funcionarioForm.valid) {
      const funcionarioNovo = this.funcionarioForm.getRawValue();
      this.funcionarioService.adicionarFuncionario(funcionarioNovo).subscribe((funcionario: Funcionario)=>{
        funcionario = funcionarioNovo;
        this.funcionarioComponent.obterFuncionarios()
      })
    }
  }

  /* 
  alterarFuncionario() {
    if (this.funcionarioForm.valid) {
      const funcionarioNovo = this.funcionarioForm.getRawValue();
      this.funcionarioService.alterarFuncionario(id, funcionarioNovo)
    }
  } */

}
