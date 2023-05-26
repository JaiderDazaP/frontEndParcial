import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LibroService } from '../shared/libro.service';
import { Libro } from '../shared/model/Libro';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent {

  libro: Libro = new Libro();

  constructor(private LibroService: LibroService) {
  }

  ngOnInit() {
  }

  btnAgregar():void{
    this.LibroService.create(this.libro).subscribe()
    console.log(this.libro.titulo)
  }

}
