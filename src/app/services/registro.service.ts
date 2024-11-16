import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private apiUrl = 'http://localhost:8080/api/crear'; // Endpoint para crear propiedades

  constructor(private http: HttpClient) {}

  agregarPropiedad(propiedad: any): Observable<any> {
    return this.http.post(this.apiUrl, propiedad);
  }
}
