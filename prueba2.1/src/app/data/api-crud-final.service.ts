import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Productos } from '../interfaces/productos';
import { Productito } from '../interfaces/productito';
@Injectable({
  providedIn: 'root'
})
export class ApiCrudFinalService {

  constructor(private http: HttpClient) { }

  listarCartasGwent():Observable<Productito>{
    return this.http.get<Productito>(`${environment.apiURL}/Productos`)
  }

  crearBarajaNueva(newBarajaGwent: Productos):Observable<Productos>{
    return this.http.post<Productos>(`${environment.apiURL}/Productos`, newBarajaGwent)
  }

  getCartaId(id: number):Observable<Productito>{
    return this.http.get<Productito>(`${environment.apiURL}/Productos/?id=${id}`)
  }

  actualizarGwentCarta(gwentActu: any): Observable<Productito>{
    return this.http.put<Productito>(`${environment.apiURL}/Productos/${gwentActu.id}`, gwentActu)
  }

  eliminarCartaGwentSuciaId(gwentEli: any):Observable<Productito>{
    return this.http.delete<Productito>(`${environment.apiURL}/Productos/${gwentEli.id}`)
  }
}
