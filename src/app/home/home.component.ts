import { Component } from '@angular/core';
import { TopnavComponent } from './topnav/topnav.component';
import { MenuComponent } from './menu/menu.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopnavComponent,ContainerComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
