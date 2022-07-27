import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { HomeComponent } from './components/home/home.component';
import { RickMortyViewComponent } from './components/rick-morty-view/rick-morty-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'personajes', component: CharactersComponent},
  { path: 'rick-and-morty', component: RickMortyViewComponent},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
