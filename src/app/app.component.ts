import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './ser/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'NFLstats';
  showModal: boolean = false;
  showLoginButton = true;
  loginForm = {
    email: '',
    password: '',
  };
  registerForm = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
  };

  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.showLoginButton = false;
    }
  }

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

  openLoginModal(): void {
    this.showModal = true;
  }

  closeLoginModal(): void {
    this.showModal = false;
  }

  login() {
    this.authService.login(this.loginForm).subscribe({
      next: (res) => {
        window.location.reload();
      },
      error: (error) => {},
    });
  }

  registerUser() {
    this.authService.register(this.registerForm).subscribe({
      next: (res) => {
        window.location.reload();
      },
      error: (error) => {},
    });
  }
}
