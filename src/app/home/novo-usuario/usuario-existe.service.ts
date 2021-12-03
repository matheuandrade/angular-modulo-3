import { NovousuarioService } from './novousuario.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import {  switchMap, map, first } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService: NovousuarioService) { }

  usuarioJaExiste(){
    return (control:AbstractControl)=>{
      return control.valueChanges.pipe(
        switchMap(
          (nomeUsuario) => this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)
        ),
        map((usuarioExiste) =>
          usuarioExiste?{ usuarioExistente: true }:null
        ),
        first()
        // encerrar fluxo da validação
      );
    }
  }
}
