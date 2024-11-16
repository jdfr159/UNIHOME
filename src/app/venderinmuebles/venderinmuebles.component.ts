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
  successMessage: string = '';  // Nueva variable para el mensaje de éxito

  constructor(private fb: FormBuilder, private registroService: RegistroService, private router: Router) {
    this.saleForm = this.fb.group({
      tipo: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      barrio: ['', [Validators.required]],
      precio: [null, [Validators.required]],
      habitaciones: [1, [Validators.min(1)]],
      banos: [1, [Validators.min(1)]],
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
          this.successMessage = 'Inmueble Registrado Correctamente';  // Mostrar mensaje de éxito
          setTimeout(() => {
            this.successMessage = '';  // Limpiar mensaje después de unos segundos
            this.saleForm.reset();  // Limpiar el formulario
            this.router.navigate(['/propiedades']); // Redirige al listado de propiedades
          }, 3000);  // El mensaje se muestra por 3 segundos
        },
        error: (error) => {
          console.error('Error al registrar la propiedad:', error);
          this.loading = false;
        }
      });
    }
  }
  
}
