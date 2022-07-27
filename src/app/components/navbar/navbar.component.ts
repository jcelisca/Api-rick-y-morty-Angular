import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] =[];

  constructor( private touter: Router) { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Inicio',
          icon: 'pi pi-home',
          routerLink: '/',
      },
      {
          label: 'Personajes',
          icon: 'pi pi-users',
          routerLink: '/personajes',
      },
      {
        label: 'Rick and Morty',
        icon: 'pi pi-database',
        routerLink: '/rick-and-morty',
      }
  ];
  }



}
