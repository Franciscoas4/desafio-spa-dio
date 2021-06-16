import { Component, OnInit } from '@angular/core';
import { curso } from '../model/curso';

@Component({
  selector: 'spa-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  exibeLista:  boolean = false;

  listaCursos: curso[] = [
    { nome: 'Angular Básico', duracao: 30},
    { nome: 'Angular Intermediário', duracao: 45},
    { nome: 'Angular Avançado', duracao: 60}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  exibirLista() {
    this.exibeLista = !this.exibeLista;
  }

}
