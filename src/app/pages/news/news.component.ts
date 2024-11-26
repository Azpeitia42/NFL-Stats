import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../ser/news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news: any[] = [];
  loading: boolean = true;
  error: boolean = false;

  constructor(private NewsService: NewsService) {}

  ngOnInit(): void {
    this.NewsService.getNFLNews().subscribe({
      next: (data) => {
        console.log('Noticias obtenidas:', data);
        this.news = data?.body || []; // Ajusta según la estructura de la API
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener noticias:', err);
        this.error = true;
        this.loading = false;
      },
    });
  }
}
