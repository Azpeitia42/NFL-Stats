import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsService } from '../../ser/teams.service';
import { UserService } from '../../ser/user.service';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  teams: any[] = [];
  loading: boolean = true;
  showModal: boolean = false; // Controla la visibilidad del modal
  selectedTeam: any = null; // Equipo seleccionado para mostrar estadísticas
  userFavorites: any[] = [];

  constructor(
    private TeamsService: TeamsService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUserFavorites();
    this.TeamsService.getNFLTeams().subscribe({
      next: (data) => {
        this.teams = data?.body.map((team: any) => ({
          ...team,
          isfavorite: this.userFavorites.includes(team.teamID),
          // isfavorite: true,
        })); // Aquí accedemos al campo "body"
        this.loading = false;
        console.log(this.teams);
      },
      error: (err) => {
        console.error('Error al obtener equipos:', err);
        this.loading = false;
      },
    });
  }

  getUserFavorites() {
    this.userService
      .getUser(JSON.parse(String(localStorage.getItem('user')))._id)
      .subscribe({
        next: (res: any) => {
          this.userFavorites = res.obj._favoriteTeams;
        },
      });
  }

  modifyUserFavoriteTeams(teamId: string) {
    this.userService
      .modifyUserFavoriteTeams(
        JSON.parse(String(localStorage.getItem('user')))._id,
        teamId
      )
      .subscribe({
        next: (res: any) => {
          console.log(res);
          window.location.reload();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  openStatsModal(team: any): void {
    this.selectedTeam = team; // Asigna el equipo seleccionado
    this.showModal = true; // Muestra el modal
  }

  closeStatsModal(): void {
    this.showModal = false; // Oculta el modal
    this.selectedTeam = null; // Limpia el equipo seleccionado
  }
}
