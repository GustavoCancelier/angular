import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Funcionario } from '../../model/funcionario';

@Component({
  selector: 'app-detalhes-funcionario',
  templateUrl: './detalhes-funcionario.component.html',
  styleUrls: ['./detalhes-funcionario.component.css']
})
export class DetalhesFuncionarioComponent implements OnInit {

  @Input() funcionario: Funcionario;
  @Output() deselecionar = new EventEmitter();
  
  constructor() {}

  deselecionarFunc(){
    this.deselecionar.emit();
  }
  ngOnInit() {
  }

}
