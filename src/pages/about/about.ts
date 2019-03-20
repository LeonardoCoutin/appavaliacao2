import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarDetailsProvider } from '../../providers/car-details/car-details';


@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
  providers:[
    CarDetailsProvider
  ]
})
export class CorreiosPage {
  nome:string;
  tipo:string;
  modelo:string;

  details = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private cProvider:  CarDetailsProvider) {
  }

  ionViewDidLoad() {
  
  }

  ListaCarros(){
    if ((this.nome.length => 2) && (this.tipo.length >= 3) && (this.modelo.length >= 3)){
      this.cProvider.listaCarros(this.nome, this.tipo, this.modelo).subscribe(
        data=>{
            let resultado = (data as any)._body;
            let resultadoJason = JSON.parse(resultado);
            this.details = resultadoJason;
       },
       error=> {
         console.log(error);
       }
      );
    }
  }

}
export class FloatingPage { }