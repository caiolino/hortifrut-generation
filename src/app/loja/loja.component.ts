import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  listaProdutos: Produto[]
  produto: Produto = new Produto

  constructor(private produtoServie: ProdutoService) { }

  ngOnInit() {
    this.findallProdutos()
  }

  findallProdutos() {
    this.produtoServie.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp
    })
  }


  cadastrar(){
    this.produtoServie.postProduto(this.produto).subscribe((resp:Produto)=>{
      this.produto = resp
      location.assign('/loja')
    })
  }

}
