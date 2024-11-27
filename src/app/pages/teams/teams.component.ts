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
  userId: any;
  constructor(
    private TeamsService: TeamsService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userId = JSON.parse(String(localStorage.getItem('user')))._id;
    this.TeamsService.getNFLTeams().subscribe({
      next: (data) => {
        this.teams = data?.body || [];
        this.teams.map((team) => {}); // Aquí accedemos al campo "body"
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener equipos:', err);
        this.loading = false;
      },
    });
  }

  modifyUserFavoriteTeams(teamId: string) {
    this.userService.modifyUserFavoriteTeams(this.userId, teamId).subscribe({
      next: (res: any) => {
        console.log(res);
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
