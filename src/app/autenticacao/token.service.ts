import { Injectable } from '@angular/core';

const KEY = 'token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  getToken = () => localStorage.getItem(KEY) ?? ''

  setToken = (token: string) => localStorage.setItem(KEY, token)

  removeToken = () => localStorage.removeItem(KEY)

  existToken = () => this.getToken() ? true : false

}
