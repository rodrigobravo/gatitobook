import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuario } from './novo-usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private novoUsuarioService:NovoUsuarioService){}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
        email: [''],
        userName: [''],
        fullName: [''],
        password: ['']
    });
  }


  cadastrar(){
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
  }
}
