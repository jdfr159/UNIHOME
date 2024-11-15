import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchBarComponent } from '../../search-bar/search-bar.component';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, RouterModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})

export class ContainerComponent {

  showContainer: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.showContainer = this.router.url === '/'; // Mostrar solo en la ruta principal
    });
  }
  
  inmuebles = [
    {
      image: 'assets/img/casa1.jpeg',
      title: 'Inmueble en Venta',
      description: 'Ubicado en el centro de la ciudad, 3 habitaciones, 2 baños.'
    },
    {
      image: 'assets/img/casa2.jpeg',
      title: 'Inmueble en Arriendo',
      description: 'Amplio apartamento en el norte, 2 habitaciones, 1 baño.'
    },
    {
      image: 'assets/img/casa3.jpeg',
      title: 'Casa Familiar',
      description: 'Casa espaciosa en los suburbios, ideal para familias.'
    }
  ];

}
