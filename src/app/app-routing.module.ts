import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListeEquipeComponent } from './liste-equipe/liste-equipe.component';
import { ListeMatchsComponent } from './liste-matchs/liste-matchs.component';
import { MatchComponent } from './match/match.component';
import { UpdateScoreComponent } from './update-score/update-score.component';

const routes: Routes = [
  {path: '',redirectTo: '/home',pathMatch: 'full'},
  {path: 'home',component: HomeComponent},
  {path: 'equips',component: ListeEquipeComponent},
  {path: 'matchs',component: ListeMatchsComponent},
  {path: 'addmatch',component: MatchComponent},
  {path: 'listmatchs/updatescore/:id',component: UpdateScoreComponent},
    
    { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
