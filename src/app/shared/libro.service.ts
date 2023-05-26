import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from './model/Libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) { }

  read(): Observable<Libro[]>{
    return this.http.get<Libro[]> ("http://localhost:8080/crud/read");
  }

  create(libro:Libro): Observable<Libro>{
    return this.http.post<Libro> ("http://localhost:8080/crud/create",libro);
  }

}
