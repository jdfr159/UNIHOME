import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistroService } from '../services/registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarusuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregarusuario.component.html',
  styleUrl: './agregarusuario.component.css'
})
export class AgregarusuarioComponent {

  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private registroService: RegistroService, private router: Router) {
    this.registroForm = this.fb.group({
      documento: ['', Validators.required],
      nombres: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
      telefono: ['', Validators.required],
      rol: ['', Validators.required],
      direccion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      usuario: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      this.registroService.registrarUsuario(this.registroForm.value).subscribe(
        response => {
          console.log('Usuario registrado con éxito:', response);
          this.router.navigate(['/login']); // Redirige al login
        },
        error => {
          console.error('Error al registrar usuario:', error);
        }
      );
    }
  }

}
