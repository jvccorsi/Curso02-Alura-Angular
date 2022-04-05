import { Injectable } from '@angular/core';

import { NovoUsuario } from './../../services/cadastro/NovoUsuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private http: HttpClient) {}

  cadastraNovoUsuario(novousuario: NovoUsuario) {
    return this.http.post('http://localhost:3000/user/signup', novousuario);
  }
}
