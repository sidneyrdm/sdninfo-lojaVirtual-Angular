import { Component, OnInit } from '@angular/core';
import { Iproduto, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Iproduto[] | undefined;

  constructor(private produtoService: ProdutosService) { }

  ngOnInit(): void {
    this.produtos = this.produtoService.getAll();
  }

}
