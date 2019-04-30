import { Component } from '@angular/core';
import { EstacionamentoService } from '../services/estacionamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  lista: any[];

  constructor(public estacionamentoService: EstacionamentoService,
    private  router: Router) {
      this.lista = this.estacionamentoService.meusPagamentos;
     }
}
