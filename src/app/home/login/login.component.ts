import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  }

  constructor(private autenticacaoService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.autenticacaoService
      .autenticar(this.user.username, this.user.password)
      .subscribe((success) => {
        this.router.navigate(['animais'])
      }, (error) => {
        console.log(error)
      })
  }

}
