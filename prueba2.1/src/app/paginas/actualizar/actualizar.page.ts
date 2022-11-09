import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiCrudFinalService } from '../../data/api-crud-final.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage  {

  ionViewWillEnter(){
    this.GetGwentId(this.getIdFormURL())
  }


  gwentActua = {
    id: 0,
    nombre: "",
    tipoCarta: "",
    nivel: 0,
    costoCreacion: 0,
    descripcion: "",
    genero: "",
    habilidad: "",
    disponible: "",
    imagen: "",
    precio: 0
  }

  constructor(private apiService: ApiCrudFinalService, private router: Router) { }


  getIdFormURL(){
    let url = this.router.url
    let array = url.split("/",3)
    let id = parseInt(array[2])
    return id
  }

  GetGwentId(gwentActua: number){
    this.apiService.getCartaId(gwentActua).subscribe(
      (respuestID: any) =>{
        this.gwentActua = {
          id: respuestID[0].id,
          nombre: respuestID[0].nombre,
          tipoCarta: respuestID[0].tipoCarta,
          nivel: respuestID[0].nivel,
          costoCreacion: respuestID[0].costoCreacion,
          descripcion: respuestID[0].descripcion,
          genero: respuestID[0].genero,
          habilidad: respuestID[0].habilidad,
          disponible: respuestID[0].disponible,
          imagen: respuestID[0].imagen,
          precio: respuestID[0].precio
        }
      }
    )
  }

  actualizaGwent(){
    this.apiService.actualizarGwentCarta(this.gwentActua).subscribe()
    this.router.navigateByUrl("/listar")
  }

}
