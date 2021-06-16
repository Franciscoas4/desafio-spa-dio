import { Component, Input, OnInit } from '@angular/core';
import { usuario } from '../model/usuario';

@Component({
  selector: 'spa-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  valor: number;

  exibeLista:  boolean = false;

  listaUsuarios: usuario[] = [
    { nome: 'Teste', email: 'Teste@gmail.com', curso: 'Angular Básico' },
    { nome: 'Teste 2', email: 'Teste2@gmail.com', curso: 'Angular Intermediário' },
    { nome: 'Teste 3', email: 'Teste3@gmail.com', curso: 'Angular Avançado' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  @Input() valorAtual: number = 10;

  aumentarValor() {
    this.valorAtual++;
  }

  diminuirValor() {
    this.valorAtual--;
  }

  reiniciarValor() {
    this.valorAtual = 0;
  }

  exibirLista() {
    this.exibeLista = !this.exibeLista;
  }

}
