import { Component, OnInit } from '@angular/core';
import { Iproduto, produtos } from '../produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Iproduto[] = produtos;

  constructor() { }

  ngOnInit(): void {
  }

}
