import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  // Escuchar el evento de desplazamiento (scroll)
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const footer = document.getElementById('footer');
    if (footer) {
      // Detecta el final de la página
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight - 100) {
        footer.classList.add('show');  // Muestra el footer
      } else {
        footer.classList.remove('show');  // Oculta el footer
      }
    }
  }

}
