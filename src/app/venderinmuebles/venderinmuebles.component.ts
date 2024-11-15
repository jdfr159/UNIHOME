import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-venderinmuebles',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule, FormsModule],
  templateUrl: './venderinmuebles.component.html',
  styleUrl: './venderinmuebles.component.css'
})
export class VenderinmueblesComponent implements OnInit {
  saleForm: FormGroup;
  uploadedImages: Array<{ file: File; previewUrl: string }> = [];
  activeSection: string = 'main';  // Controla la sección activa
  loading: boolean = false;

  constructor(private fb: FormBuilder) {
    this.saleForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(500)]],
      price: [null, [Validators.required, Validators.min(0)]],
      address: ['', [Validators.required, Validators.maxLength(200)]],
      bedrooms: [1, [Validators.min(1)]],
      bathrooms: [1, [Validators.min(1)]],
      area: [null, [Validators.min(1)]],
      transactionType: ['', Validators.required],
      images: [null]
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  setActiveSection(section: string): void {
    this.activeSection = section;
  }

  onFileSelected(event: any): void {
    const files = event.target.files;
    if (files) {
      for (let file of files) {
        const reader = new FileReader();
        reader.onload = () => {
          this.uploadedImages.push({ file, previewUrl: reader.result as string });
        };
        reader.readAsDataURL(file);
      }
    }
  }

  removeImage(index: number): void {
    this.uploadedImages.splice(index, 1);
  }

  submitForm(): void {
    if (this.saleForm.valid) {
      this.loading = true;
      const formData = {
        ...this.saleForm.value,
        images: this.uploadedImages.map(image => image.file)
      };
      console.log('Datos del formulario:', formData);
      setTimeout(() => this.loading = false, 2000);
    }
  }

}
