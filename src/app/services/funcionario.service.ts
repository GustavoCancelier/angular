import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../model/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  listarFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>('http://localhost:3000/funcionarios');
  }

  obterDadosFuncionario(id: number): Observable<Funcionario> { 
    return this.http.get<Funcionario>(`http://localhost:3000/funcionarios/${id}`);
  }

  adicionarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>('http://localhost:3000/funcionarios', funcionario);
  }

  removerFncionario(id: number): Observable<Funcionario> {
    return this.http.delete<Funcionario>(`http://localhost:3000/funcionarios/${id}`);
  }

  alterarFuncionario(id: number, funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`http://localhost:3000/funcionarios/${id}`, funcionario)
  }
}
