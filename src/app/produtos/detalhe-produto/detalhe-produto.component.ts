import { TypeScriptEmitter } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from 'src/app/notificacao.service';
import { Iproduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  produto: Iproduto | undefined;
  quantidade = 1;

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute,
    private notificacao: NotificacaoService) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const IDproduto = Number(routeParams.get("id"));
    this.produto = this.produtoService.getOne(IDproduto);
  }

  adicionarAoCarrinho() {
    this.notificacao.notificar("Produto adicionado ao carrinho"); 
  }

}
