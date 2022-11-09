import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCrudFinalService } from '../../data/api-crud-final.service';
import { Productos } from '../../interfaces/productos';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  newBarajaGwent:Productos = {
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
    private router: Router,
    ) { }

  ngOnInit() {
  }

  crearBarajaNueva(){
    this.apiService.crearBarajaNueva(this.newBarajaGwent).subscribe()
    this.router.navigateByUrl("/lista-gwent")
  }

}
