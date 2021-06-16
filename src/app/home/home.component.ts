import { Component, OnInit } from '@angular/core';
import { usuario } from '../model/usuario';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  valor: number;
  
  constructor() { }

  ngOnInit(): void {
    this.valor = 5;
  }

}
