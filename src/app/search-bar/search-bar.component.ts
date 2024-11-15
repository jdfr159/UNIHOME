import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  searchTerm: string = ''; // Término de búsqueda
  items: string[] = ['Casa', 'Apartamento', 'Oficina', 'Terreno', 'Edificio', 'Local Comercial']; // Lista de ejemplo
  filteredItems: string[] = [];
  showDropdown: boolean = false; // Controla la visibilidad del menú desplegable

  constructor() {
    this.filteredItems = this.items;
  }

  // Filtrar elementos según el término de búsqueda
  onSearch() {
    this.filteredItems = this.items.filter(item =>
      item.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Mostrar las recomendaciones cuando el campo de búsqueda recibe foco
  showSuggestions() {
    this.showDropdown = true;
  }

  // Ocultar las recomendaciones cuando el campo de búsqueda pierde foco
  hideSuggestions() {
    // Delay para permitir la selección del elemento antes de ocultar el dropdown
    setTimeout(() => {
      this.showDropdown = false;
    }, 100); 
  }

  // Seleccionar un elemento de las recomendaciones
  selectItem(item: string) {
    this.searchTerm = item;
    this.filteredItems = [];
    this.showDropdown = false;
  }

}
