import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCrudFinalService } from '../../data/api-crud-final.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage {

  ionViewWillEnter(){
    this.GetGwentId(this.getIdFormURL())
  }

  gwentArray = {
    id: 0,
    nombre: "carta nueva",
    tipoCarta: "tipo de carta nueva",
    nivel: 0,
    costoCreacion: 0,
    descripcion: "nueva descripcion",
    genero: "tipo de genero de color nuevo",
    habilidad: "habilidad nueva",
    disponible: "carta disponible",
    imagen: "",
    precio: 0
  }


  constructor(
    private apiService: ApiCrudFinalService,
    private router: Router
    )
  { }


  getIdFormURL(){
    let url = this.router.url
    let array = url.split("/",3)
    let id = parseInt(array[2])
    return id
  }

  GetGwentId(gwentArray: number){
    this.apiService.getCartaId(gwentArray).subscribe(
      (respuestID: any) =>{
        this.gwentArray = {
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

}
