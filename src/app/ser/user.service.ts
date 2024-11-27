import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient, private router: Router) {}

  getUser(userId: string) {
    return this.httpClient.get(this.baseUrl + 'users/' + userId);
  }

  modifyUserFavoriteTeams(userId: String, teamId: string) {
    return this.httpClient.post(this.baseUrl + 'users/favoritos/' + userId, {
      teamId: teamId,
    });
  }
}
