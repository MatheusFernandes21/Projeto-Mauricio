import { Component } from '@angular/core';
import { EstacionamentoService } from 'src/app/services/estacionamento.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  entrada: any;
  saida: any;
  total: any;
  reais: any;

  constructor(public estacionamentoService: EstacionamentoService,
    private  router: Router, public alertController: AlertController) { }

  Calcular() {
      this.total = this.estacionamentoService.Calcular(this.entrada, this.saida);
      this.reais = this.total;
  }

  Pagar(){
        if(this.total > 0){
          this.estacionamentoService.Pagar(this.entrada, this.saida, this.total);
          this.entrada = "";
          this.saida = "";
          this.total = "R$0,00";
          this.AlertaSucesso();
        }
        else{
          this.AlertaErro();
        }
  }

  async AlertaSucesso() {
    const alert = await this.alertController.create({
      header: 'Sucesso!',
      message: 'Ticket pago com sucesso!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async AlertaErro() {
    const alert = await this.alertController.create({
      header: 'Erro!',
      message: 'Ocorreu um erro ao realizar pagamento!',
      buttons: ['OK']
    });

    await alert.present();
  }

}
