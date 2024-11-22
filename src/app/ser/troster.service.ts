import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrosterService {
  private baseUrl = 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com';
  private apiKey = 'd11613539emshdcb616184c33d4bp10a572jsn322f318bbd2f';

  constructor(private http: HttpClient) {}

  getNFLTeamRoster(teamAbv: string): Observable<any> {
    const url = `${this.baseUrl}/getNFLTeamRoster`;
  
    // Configurar encabezados
    const headers = new HttpHeaders({
      'X-Rapidapi-Key': this.apiKey,
      'X-Rapidapi-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com',
    });
  
    // Configurar parámetros
    const params = new HttpParams()
      .set('teamAbv', teamAbv) // Ajusta si necesitas el `teamAbv` dinámico
      .set('archiveDate', '')
      .set('getStats', 'true')
      .set('fantasyPoints', 'true');
  
    // Realizar la solicitud GET
    return this.http.get(url, { headers, params });
  }
}
