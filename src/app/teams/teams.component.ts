import { Component } from '@angular/core';

@Component({
  selector: 'app-equipos',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  equipos = [
    { nombre: 'Cowboys' },
    { nombre: 'Eagles' },
    { nombre: '49ers' },
    { nombre: 'Chiefs' },
    { nombre: 'Bills' }
  ];
}

