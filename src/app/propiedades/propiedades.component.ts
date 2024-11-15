import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../services/propiedades.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-propiedades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.css'
})
export class PropiedadesComponent implements OnInit {

  propiedades: any[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private propiedadesService: PropiedadesService) {}

  ngOnInit(): void {
    // Llamamos al servicio para obtener las propiedades
    this.propiedadesService.getPropiedades().subscribe({
      next: (data) => {
        this.propiedades = data;  // Asignamos las propiedades al array
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al obtener las propiedades:', error);
        this.errorMessage = 'Error al cargar las propiedades.';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}


