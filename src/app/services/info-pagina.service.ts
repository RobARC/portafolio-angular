import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {}
  cargada =  false;
  equipo: any [] = [];

  constructor(private http: HttpClient) {
    //Leer archivo JSON
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('../assets/data/data.json').subscribe((data: InfoPagina) => {
      this.info = data
      this.cargada = true
    });
  }

  cargarEquipo() {
    this.http.get('https://angular-html-86340-default-rtdb.firebaseio.com/equipo.json').subscribe((resp: any) => {
      this.equipo = resp;
    });
  }
}
