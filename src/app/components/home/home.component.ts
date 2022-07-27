import { Component, OnInit } from '@angular/core';
import { Personajes } from 'src/app/interfaces/character.interface';
import { ApiserviceService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characters: Personajes[] = [];

  constructor(private service: ApiserviceService) { }

  ngOnInit(): void {
    this.service.buscarPersonaje("rick").subscribe(data =>{
      this.characters = data.results.splice(0,10);
      console.log(this.characters);
    })
  }

}
