import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private apiUrl = 'http://localhost:8080/user/crear';

  constructor(private http: HttpClient) {}

  registrarUsuario(usuarioData: any): Observable<any> {
    return this.http.post(this.apiUrl, usuarioData);
  }
}
