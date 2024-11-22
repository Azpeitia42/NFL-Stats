import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../../ser/schedule.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  games: any[] = [];
  loading: boolean = true;
  error: boolean = false;

  constructor(private ScheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.ScheduleService.getNFLGamesForWeek().subscribe({
      next: (data) => {
        const allGames = data?.body || []; // Ajusta esto si la estructura cambia
        this.games = this.groupGamesByWeek(allGames);
        console.log(this.games);

        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener el calendario:', err);
        this.error = true;
        this.loading = false;
      },
    });
  }

  groupGamesByWeek(games: any[]): any[] {
    const grouped = games.reduce((acc, game) => {
      const week = game.gameWeek;
      if (!acc[week]) acc[week] = [];
      acc[week].push(game);
      return acc;
    }, {});
    return Object.entries(grouped).map(([week, games]) => ({ week, games }));
  }
}
