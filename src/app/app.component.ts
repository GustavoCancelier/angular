import { Component } from '@angular/core';
import { Funcionario } from './model/funcionario';
import {EnumFilial} from "./enums/filial.enum";
import { FuncionarioService } from './services/funcionario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  funcionarios: Funcionario[] = [];
  funcionarioSelecionado: Funcionario;

  constructor(private funcionarioService: FuncionarioService) { 
    this.obterFuncionarios();
  }

  selecionarFuncionario(funcionario: Funcionario) { 
    this.funcionarioService.obterDadosFuncionario(funcionario.id).subscribe((funcionario: Funcionario) => {
      this.funcionarioSelecionado = funcionario;
    })
  }

   mostrarDetalhes(funcionario){
    return alert('Nome do funcionário ' + funcionario.nome);
   }

   removerEspecifico(funcionario, event) {
     event.stopPropagation();
    this.funcionarioService.removerFncionario(funcionario.id).subscribe(() => {
      this.obterFuncionarios();
    })
    /* const indexFuncionario = this.funcionarios.indexOf(funcionario);
    this.funcionarios.splice(indexFuncionario, 1); */
   }

   removerUltimo() {
     this.funcionarios.pop();
   }

   removerPrimeiro() {
     this.funcionarios.shift();
  }

  removerTodos() {
    this.funcionarios = [];
  }

  addFuncionario() {
    const funcionarioNovo = {
      nome: 'Alberto',
      filial: EnumFilial.MATRIZ,
      dataAdmissao: new Date('2018/02/28'),
      cargo: 'Caixa',
      salario: 2000,
      estaFerias: true,
    }

    this.funcionarioService.adicionarFuncionario(funcionarioNovo).subscribe((funcionario: Funcionario)=> {
      funcionario = funcionarioNovo;
      this.obterFuncionarios();
    });

  }

   obterFuncionarios (){
     this.funcionarioService.listarFuncionarios().subscribe((funcionarios: Funcionario[]) => { 
          this.funcionarios = funcionarios;
        }
      );
   }
}
