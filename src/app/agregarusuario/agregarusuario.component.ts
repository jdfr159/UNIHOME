import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrearUsuarioResponse } from '../models/crearusuarioresponse';
import { RegistrousuarioService } from '../services/registrousuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregarusuario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './agregarusuario.component.html',
  styleUrl: './agregarusuario.component.css'
})
export class AgregarusuarioComponent {
  
  registroForm: FormGroup;
  successMessage: string = '';  // Variable para almacenar el mensaje de éxito
  errorMessage: string = '';  // Variable para almacenar el mensaje de error

  constructor(
    private fb: FormBuilder,
    private registroUsuarioService: RegistrousuarioService,
    private router: Router
  ) {
    this.registroForm = this.fb.group({
      documento: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      sexo: ['', Validators.required],
      telefono: ['', Validators.required],
      roleName: ['', Validators.required],  // Cambiado a roleName
      direccion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      usuario: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const userData = this.registroForm.value;

      // Llamada al servicio para crear el usuario
      this.registroUsuarioService.crearUsuario(userData).subscribe(
        (response: CrearUsuarioResponse) => {
          console.log('Usuario creado:', response);
          this.successMessage = 'Usuario creado exitosamente';  // Establecer mensaje de éxito
          this.errorMessage = '';  // Limpiar mensaje de error
          this.router.navigate(['/usuarios']);  // Redirige a la página de usuarios después de la creación
        },
        (error: any) => {
          console.error('Error al crear usuario:', error);
          this.successMessage = '';  // Limpiar mensaje de éxito
          this.errorMessage = 'Error al crear el usuario';  // Establecer mensaje de error
        }
      );
    }
  }

}
