import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  dropdownStates: boolean[] = [false, false, false];

  toggleDropdown(index: number): void {
    // Cierra otros menús antes de abrir el actual
    this.dropdownStates = this.dropdownStates.map((state, i) => i === index ? !state : false);
  }

}
