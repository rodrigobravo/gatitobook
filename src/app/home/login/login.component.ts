import { Component } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario = '';
  senha = '';
constructor(private authService: AutenticacaoService){}
  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe(()=>{
      console.log('SUCESSO');
    },
    (error) => {
      alert('Usuario ou senha invalida');
      console.log(error);
    })
  }

}
