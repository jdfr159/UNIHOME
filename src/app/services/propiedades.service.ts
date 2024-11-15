import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {

  private apiUrl = 'http://localhost:8080/api/listar'; // Cambia esta URL por la de tu servidor backend

  constructor(private http: HttpClient) { }

  // Método para obtener las propiedades desde el backend
  getPropiedades(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.data) // Extraemos la propiedad 'data' que contiene las propiedades
    );
  }

}
