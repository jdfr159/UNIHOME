import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RegistroService } from '../services/registro.service';

@Component({
  selector: 'app-venderinmuebles',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule, FormsModule],
  templateUrl: './venderinmuebles.component.html',
  styleUrl: './venderinmuebles.component.css'
})
export class VenderinmueblesComponent {
  saleForm: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private registroService: RegistroService, private router: Router) {
    this.saleForm = this.fb.group({
      tipo: ['', [Validators.required]],         // Antes: transactionType
      direccion: ['', [Validators.required]],   // Antes: address
      barrio: ['', [Validators.required]],      // Antes: title
      precio: [null, [Validators.required]],    // Antes: price
      habitaciones: [1, [Validators.min(1)]],   // Antes: bedrooms
      banos: [1, [Validators.min(1)]],          // Antes: bathrooms
      area: [null, [Validators.min(1)]],
      descripcion: ['', [Validators.maxLength(500)]]
    });
  }
  
  submitForm(): void {
    if (this.saleForm.valid) {
      this.loading = true;
      this.registroService.agregarPropiedad(this.saleForm.value).subscribe({
        next: (response) => {
          console.log('Propiedad registrada:', response);
          this.loading = false;
          this.router.navigate(['/propiedades']); // Redirige al listado de propiedades
        },
        error: (error) => {
          console.error('Error al registrar la propiedad:', error);
          this.loading = false;
        }
      });
    }
  }
  
}
