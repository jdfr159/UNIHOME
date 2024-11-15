import { CommonModule } from '@angular/common';
import { Component, inject, Renderer2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent {

  private renderer = inject(Renderer2);
  private authService = inject(AuthService);
  private router = inject(Router);
  userName: string = '';
  userRole: string = '';
  email: string = '';

  ngOnInit(): void {
    // Obtener los datos del usuario al cargar el componente
    const user = this.authService.getUserData();
    if (user) {
      this.userName = user.name;
      this.userRole = user.role;
      this.email = user.email;
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }  

  toggleSidebar() {
    const body = document.body;
    if (body.classList.contains('sidebar-collapse')) {
      this.renderer.removeClass(body, 'sidebar-collapse');
      this.renderer.addClass(body, 'sidebar-open');
    } else {
      this.renderer.removeClass(body, 'sidebar-open');
      this.renderer.addClass(body, 'sidebar-collapse');
    }
  }

  Inicio() {
    this.router.navigate(['/home']);
  }  

}

