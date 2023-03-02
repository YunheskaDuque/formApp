import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent {

  myForm: FormGroup = this.fb.group({
    nombre: [ , [ Validators.required, Validators.minLength(3), Validators.pattern(/^([a-z]|[A-Z])*$/) ]  ],
    apellido: [ , [ Validators.required, Validators.minLength(3), Validators.pattern(/^([a-z]|[A-Z])*$/)] ],
    edad: [ , [ Validators.required, Validators.min(18), Validators.max(65) ] ]
  });

  constructor( private fb: FormBuilder ) {  }

  campoEsValido( campo: string ) {
     return this.myForm.controls[campo].errors 
           && this.myForm.controls[campo].touched;
  }
 
 registrar() {
    
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }

}

