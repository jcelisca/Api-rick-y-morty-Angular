import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data, Personajes } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  private apiURL : string = 'https://rickandmortyapi.com/api/character';
  private _historial: Personajes[] = [];

  constructor( private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
  }


  get historial(){
    return [...this._historial];
  }

  buscarPersonaje(nombre: string){
    const url = `${this.apiURL}/?name=${nombre}`;
    return this.http.get<Data>(url);
  }

  todosLosPersonajes(){
    return this.http.get<Data>(this.apiURL);
  }

  pasoPagina(url: string){
    return this.http.get<Data>(url);
  }

  filterByStatus(status: string){
    const url = `${this.apiURL}/?status=${status}`;
    return this.http.get<Data>(url);
  }

  filterBySpecie(specie: string){
    const url = `${this.apiURL}/?species=${specie}`;
    return this.http.get<Data>(url);
  }

  filterByGender(gender: string){
    const url = `${this.apiURL}/?gender=${gender}`;
    return this.http.get<Data>(url);
  }

}
