import { Usuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({})

  constructor(private tokenService: TokenService) {
    if(this.tokenService.existToken()){
      this.decodificaJWT()
    }
  }

  private decodificaJWT() {
    const token = this.tokenService.getToken()
    const usuario = jwtDecode(token) as Usuario

    this.usuarioSubject.next(usuario)
  }

  getUsuario(){
    return this.usuarioSubject.asObservable()
  }

  saveToken(token: string){
    this.tokenService.setToken(token)
    this.decodificaJWT()
  }

  logout(){
    this.tokenService.removeToken()
    this.usuarioSubject.next({})
  }

  isLogged(){
    return this.tokenService.existToken()
  }
}
