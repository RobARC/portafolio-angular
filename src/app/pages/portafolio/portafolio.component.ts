import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  productos: any[] = [];
  cargando = true;
  myProduct!: Producto;
  productId!: string;

  constructor(public productoService: ProductosService){}

  ngOnInit(){
    this.obtenerProductos();
    
  }

  obtenerProductos(){
    this.productoService.cargarProductos().subscribe(resp =>{
         
      this.productos = resp;
      this.myProduct = resp;

      this.productId = this.myProduct.cod;

      this.cargando = false;
      
    });
  }

  soloUnProducto(){
    this.productoService.unProducto(this.productId).subscribe(data =>{
      console.log(data);
      
    })
  }

}
