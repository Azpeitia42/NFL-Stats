import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './pages/news/news.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { PlayersComponent } from './pages/teams/players/players.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { UserComponent } from './pages/user/user.component';

export const appRoutes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'equipos', component: TeamsComponent },
  { path: 'equipos/jugadores/:teamAbv', component: PlayersComponent },
  { path: 'calendario', component: ScheduleComponent },
  { path: 'favoritos', component: FavoritesComponent },
  { path: 'usuario', component: UserComponent },
  { path: '**', redirectTo: '' } // Página principal por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


