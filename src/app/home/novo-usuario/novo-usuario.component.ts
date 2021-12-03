import { Router } from '@angular/router';
import { usuarioSenhaIguais } from './validators/usuario-senha-iguais.validator';
import { UsuarioExisteService } from './usuario-existe.service';
import { NovousuarioService } from './novousuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { minusculoValidator } from './validators/minusculo.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovousuarioService,
    private usuarioExistente: UsuarioExisteService,
    private router: Router){}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [minusculoValidator]],
      // userName: ['', [minusculoValidator], [this.usuarioExistente.usuarioJaExiste()]],
      password: ['']
    }, {
      validators: [usuarioSenhaIguais]
    })
  }

  cadastrar(): void {
    if(this.novoUsuarioForm.valid){
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario

      this.novoUsuarioService
        .cadastraNovoUsuario(novoUsuario)
        .subscribe((success) => {
          this.router.navigate([''])
        }, (error) => {
          console.log(error)
        })
    }

  }

}
