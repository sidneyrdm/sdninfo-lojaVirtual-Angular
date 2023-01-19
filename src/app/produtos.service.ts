import { Injectable } from '@angular/core';
import { Iproduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: Iproduto[] = produtos;

  constructor() { }

  getAll(){
    return this.produtos;
  }

  getOne(IDproduto: number){
    return this.produtos.find(produto => produto.id == IDproduto); 
  }
}
