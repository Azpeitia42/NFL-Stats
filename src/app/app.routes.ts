import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { ScheduleComponent } from './schedule/schedule.component';

export const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'equipos', component: TeamsComponent },
  { path: 'jugadores', component: PlayersComponent },
  { path: 'calendario', component: ScheduleComponent },
  { path: '**', redirectTo: '' }, // Redirección a Noticias por defecto
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}

