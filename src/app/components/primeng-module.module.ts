import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { RickMortyViewComponent } from './rick-morty-view/rick-morty-view.component';

import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { FormsModule } from '@angular/forms';
import {PanelMenuModule} from 'primeng/panelmenu';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CharactersComponent,
    RickMortyViewComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    FormsModule,
    PanelMenuModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class PrimengModuleModule { }
