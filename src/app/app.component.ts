import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'NFLstats';

  constructor(private router: Router) {}

  navigateToNewsPage() {
    this.router.navigate(['noticias']);
  }
  navigateToTeamsPage() {
    this.router.navigate(['equipos']);
  }
  navigateToCalendarPage() {
    this.router.navigate(['calendario']);
  }
  navigateToFavoritePage() {
    this.router.navigate(['favoritos']);
  }
  navigateToUserPage() {
    this.router.navigate(['usuario']);
  }

  login() {}
}
