import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {

  private apiUrl = 'http://localhost:8080/api/listar'; // Endpoint para listar propiedades

  constructor(private http: HttpClient) {}

  listarPropiedades(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
