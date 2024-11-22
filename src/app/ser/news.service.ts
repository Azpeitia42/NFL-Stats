import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private baseUrl = 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com';
  private apiKey = 'd11613539emshdcb616184c33d4bp10a572jsn322f318bbd2f';

  constructor(private http: HttpClient) {}

  getNFLNews(): Observable<any> {
    const url = `${this.baseUrl}/getNFLNews`;

    // Configurar encabezados
    const headers = new HttpHeaders({
      'X-Rapidapi-Key': this.apiKey,
      'X-Rapidapi-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com',
    });

    // Configurar parámetros
    const params = new HttpParams()
      .set('playerID', '')
      .set('teamID', '')
      .set('teamAbv', '')
      .set('topNews', '')
      .set('fantasyNews', 'true')
      .set('recentNews', '')
      .set('maxItems', '20')

    // Realizar la solicitud GET
    return this.http.get(url, { headers, params });
  }
}