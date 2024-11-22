import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrosterService } from '../../../ser/troster.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  players: any[] = [];
  loading: boolean = true;
  error: boolean = false;
  teamAbv: string = '';

  constructor(
    private trosterService: TrosterService, // Servicio para jugadores
    private route: ActivatedRoute // Servicio para leer la URL
  ) {}

  ngOnInit(): void {
    // Obtener el parámetro `teamAbv` desde la URL
    this.teamAbv = this.route.snapshot.paramMap.get('teamAbv') || '';
    console.log('Team Abv:', this.teamAbv);
  
    // Llamar al servicio con `teamAbv`
    this.trosterService.getNFLTeamRoster(this.teamAbv).subscribe({
      next: (data) => {
        console.log('API Response:', data); // Inspecciona la respuesta aquí
        this.players = data?.body?.roster || []; // Accede al array `roster`
        console.log('Players:', this.players); // Verifica los datos de jugadores
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener jugadores:', err); // Inspecciona el error aquí
        this.error = true;
        this.loading = false;
      },
    });
  }
}
  


