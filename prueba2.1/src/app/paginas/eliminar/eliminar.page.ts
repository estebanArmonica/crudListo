import { Component, OnInit } from '@angular/core';
import { ApiCrudFinalService } from '../../data/api-crud-final.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage  {

  ionViewWillEnter(){
    this.GetGwentId(this.getIdFormURL())
  }

  gwentEli = {
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

  constructor(
    private apiService: ApiCrudFinalService,
    private router: Router
  ) { }

  getIdFormURL(){
    let url = this.router.url
    let array = url.split("/",3)
    let id = parseInt(array[2])
    return id
  }

  eliminarGwent(){
    this.apiService.eliminarCartaGwentSuciaId(this.gwentEli).subscribe()
    this.router.navigateByUrl("/lista-gwent")
  }

  GetGwentId(gwentDatoId: number){
    this.apiService.getCartaId(gwentDatoId).subscribe(
      (respuestID: any) =>{
        this.gwentEli = {
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
