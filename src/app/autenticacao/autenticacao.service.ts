import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) { }

  autenticar(username: string, password: string): Observable<HttpResponse<any>>
  {
    return this.httpClient.post('http://localhost:3000/user/login', {
      username,
      password
    }, {
      observe: 'response'
    }).pipe(
      tap((response) => {
        const authToken = response.headers.get('x-access-token') ?? ''
        this.usuarioService.saveToken(authToken)
      })
    )
  }
}
