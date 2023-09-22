import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Producto } from '../interfaces/productos.interface'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  URL = "https://angular-html-86340-default-rtdb.firebaseio.com/"
 
  triggerProducto$ = new EventEmitter<any>();

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  cargarProductos(): Observable<any>{
    return this.http.get(this.URL+'/productos_idx.json')
    };

  unProducto(id: string){
    return this.http.get(this.URL+`/productos/${id}.json`)
  }

 

  }

