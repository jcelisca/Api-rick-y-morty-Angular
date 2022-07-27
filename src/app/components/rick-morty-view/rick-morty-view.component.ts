import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ApiserviceService } from 'src/app/services/api.service';
import { Data, Personajes } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-rick-morty-view',
  templateUrl: './rick-morty-view.component.html',
  styleUrls: ['./rick-morty-view.component.css']
})
export class RickMortyViewComponent implements OnInit {

  items: MenuItem[] =[];
  characters: Personajes[] = [];
  paginaAnterior: string = '';
  siguientePagina: string ='';

  constructor( private service: ApiserviceService) { }

  ngOnInit() {
    this.items = [
      {
          label: 'Filtrar personajes',
          icon: 'pi pi-pw pi-file',
          items: [
            {
                label: 'Estado',
                items: [
                    {
                      label: 'Vivo',
                      icon:'pi pi-fw pi-plus-circle',
                      command: (e=> this.filterByStatus("alive"))
                    },
                    {
                      label: 'Muerto',
                      icon:'pi pi-fw pi-minus-circle',
                      command: (e=> this.filterByStatus("dead"))
                    },
                    {
                      label: 'Desconocido',
                      icon:'pi pi-fw pi-question',
                      command: (e=> this.filterByStatus("unknown"))
                    }
                ]
            },
            {
              label: 'Especie',
              items: [
                  {
                    label: 'Humano',
                    icon:'pi pi-fw pi-user',
                    command: (e=> this.filterBySpecie("human"))
                  },
                  {
                    label: 'Alien',
                    icon:'pi pi-fw pi-reddit',
                    command: (e=> this.filterBySpecie("alien"))
                  },
              ]
          },
          {
            label: 'Género',
            items: [
                {
                  label: 'Masculino',
                  icon:'pi pi-fw pi-star-fill',
                  command: (e=> this.filterByGender("male"))
                },
                {
                  label: 'Femenino',
                  icon:'pi pi-fw pi-heart-fill',
                  command: (e=> this.filterByGender("female"))
                },
                {
                  label: 'Sin género',
                  icon:'pi pi-fw pi-hashtag',
                  command: (e=> this.filterByGender("genderless"))
                },
                {
                  label: 'Desconocido',
                  icon:'pi pi-fw pi-exclamation-circle',
                  command: (e=> this.filterByGender("unknown"))
                },
            ]
        }
        ]

      },
      {
        label: 'Todos los personajes',
        icon: 'pi pi-pw pi-image',
        command: ( e => this.service.todosLosPersonajes().subscribe(data =>{
          this.saveData(data);
        }))
      }
  ];
  }

  anterior(){
    this.service.pasoPagina(this.paginaAnterior).subscribe(data =>{
      this.saveData(data);
    })
  }

  siguiente(){
    this.service.pasoPagina(this.siguientePagina).subscribe(data =>{
      this.saveData(data);
    })
  }

  filterByStatus(status: string){
    this.service.filterByStatus(status).subscribe(data =>{
      this.saveData(data);
    });
  }

  filterBySpecie(specie: string){
    this.service.filterBySpecie(specie).subscribe(data =>{
      this.saveData(data);
    });
  }

  filterByGender(gender: string){
    this.service.filterByGender(gender).subscribe(data =>{
      this.saveData(data);
    });
  }

  saveData(data: Data){
    this.characters = data.results;
      this.paginaAnterior = data.info.prev? data.info.prev: '';
      this.siguientePagina = data.info.next? data.info.next: '';
  }

}
