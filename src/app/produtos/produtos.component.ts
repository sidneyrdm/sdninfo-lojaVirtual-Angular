import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduto, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Iproduto[] | undefined;

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const produtos = this.produtoService.getAll();

    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase;
      if (descricao) {
        this.produtos = produtos.filter(produto => produto.descricao.toLocaleLowerCase().includes(descricao + ''));
        return;
      }

      this.produtos = produtos;
    })
    //this.produtos = this.produtoService.getAll();
  }

}
