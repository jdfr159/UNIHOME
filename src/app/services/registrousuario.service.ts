import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrousuarioService {

  private apiUrl = 'http://localhost:8080/user/crear';  // URL del backend actualizada

  constructor(private http: HttpClient) { }

  crearUsuario(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }

}
