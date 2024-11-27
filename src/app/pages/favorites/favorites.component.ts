import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TeamsService } from '../../ser/teams.service';
import { UserService } from '../../ser/user.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent {
  constructor(
    private teamService: TeamsService,
    private userService: UserService
  ) {}
  favorites: any[] = [];
  favoriteTeams: any[] = [];
  showModal: boolean = false; // Controla la visibilidad del modal
  selectedTeam: any = null;

  ngOnInit() {
    this.getFavoriteTeams();
    this.getUserFavoriteTeams();
  }

  getUserFavoriteTeams() {
    this.userService
      .getUser(JSON.parse(String(localStorage.getItem('user')))._id)
      .subscribe({
        next: (res: any) => {
          this.favorites = res.obj._favoriteTeams;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  getFavoriteTeams() {
    this.teamService.getNFLTeams().subscribe({
      next: (data) => {
        this.favoriteTeams = data?.body.filter((item1: any) =>
          this.favorites.some((item2) => item1.teamID === item2)
        );
      },
      error: (err) => {
        console.error('Error al obtener equipos:', err);
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
