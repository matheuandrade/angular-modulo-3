import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovousuarioService {

  constructor(private httpClientService: HttpClient) { }

  verificaUsuarioExistente(userName: string){
    return this.httpClientService.get(`http://localhost:3000/user/exists/${userName}`)
  }

  cadastraNovoUsuario(usuario: NovoUsuario){
    return this.httpClientService
            .post('http://localhost:3000/user/signup', usuario)
  }
}
