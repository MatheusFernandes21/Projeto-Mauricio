import { Injectable } from '@angular/core';

class Pagamento {
  public ticket: any;
  public entrada: any;
  public saida: any;
  public total: any; 
}

@Injectable({
  providedIn: 'root'
})

export class EstacionamentoService {
  constructor() { }

  meusPagamentos: Pagamento[] = new Array(); 
  novoPagamento: Pagamento;

  Iniciar(){
    this.novoPagamento = new Pagamento();
    this.novoPagamento.ticket = Math.floor(Math.random() * (9999-1));
    return this.novoPagamento.ticket;
  }

  Calcular(entrada, saida){
    let e = new Date(entrada);
    let s = new Date(saida);
    let t = e.getHours() - s.getHours();
    t = +(t * -1) * 10;

    return  t;
  }

  Pagar(entrada: any, saida: any, total: any){
    this.novoPagamento.entrada = entrada;
    this.novoPagamento.saida = saida;
    this.novoPagamento.total = total;

    this.meusPagamentos.push(    
      this.novoPagamento    
    );  

    this.meusPagamentos.forEach(item => console.log(item))
  }
}
