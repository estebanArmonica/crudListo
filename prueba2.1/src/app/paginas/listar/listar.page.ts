import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { ApiCrudFinalService } from '../../data/api-crud-final.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage  {

  barajas = []

  constructor(private barajaServicio: ApiCrudFinalService, private cargarControl: LoadingController) { }

  ionViewWillEnter(){
    this.cargarBarajas();
  }

  async cargarBarajas(carga?: InfiniteScrollCustomEvent){
    const cargando =  await this.cargarControl.create({
      message: "cargando cartas...",
      spinner: "bubbles"
    }
    )
    await cargando.present();

    this.barajaServicio.listarCartasGwent().subscribe(
      (respuesta) => { // respuesta tipo json
        cargando.dismiss();
        let listaString = JSON.stringify(respuesta)
        this.barajas = JSON.parse(listaString)
        carga?.target.complete();
      },
      (error) => {
        console.log(error.message)
        cargando.dismiss();
      }
    )
  }

}
