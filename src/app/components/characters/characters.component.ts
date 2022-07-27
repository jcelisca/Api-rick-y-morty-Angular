import { Component, OnInit } from '@angular/core';
import { Personajes } from 'src/app/interfaces/character.interface';
import { ApiserviceService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  personaje!: Personajes;
  listapersonajes: Personajes[] = [];
  termino: string = '';
  hayError: boolean = false;

  constructor( private service: ApiserviceService) {
    this.listapersonajes = this.service.historial;
  }

  ngOnInit(): void {}

  buscar(name: string){
    this.hayError= false;
    this.termino = name;

    this.service.buscarPersonaje(this.termino)
    .subscribe(data => {
      this.personaje = data.results[0];
      if(this.listapersonajes.length >= 8) {
        this.listapersonajes = this.listapersonajes.splice(1,8);
        this.listapersonajes.push(this.personaje);
      }else{
        this.listapersonajes.push(this.personaje);
      }
      localStorage.setItem('historial', JSON.stringify(this.listapersonajes));
      this.termino = '';
    }, err => this.hayError= true)
  }

}
