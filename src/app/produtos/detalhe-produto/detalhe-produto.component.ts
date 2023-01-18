import { TypeScriptEmitter } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { Iproduto, IProdutoCarrinho } from 'src/app/produtos';
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
    private carrinhoService: CarrinhoService,
    private notificacao: NotificacaoService) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const IDproduto = Number(routeParams.get("id"));
    this.produto = this.produtoService.getOne(IDproduto);
  }

  adicionarAoCarrinho() {
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(produto);
    this.notificacao.notificar("Produto adicionado ao carrinho"); 
  }

}
