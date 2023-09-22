import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  productos: any[] = [];
  productosFiltrado: any[] = [];

  constructor(private route: ActivatedRoute,
              public productoService: ProductosService) {}

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      console.log(params['termino']);

      this.buscarProducto(params['termino'])
      
    })
    
  }

  buscarProducto(termino: string){
    this.productoService.cargarProductos().subscribe(resp =>{
         
      this.productos = resp;
      this.productosFiltrado = []

      termino = termino.toLowerCase();

      console.log(this.productos);

      this.productos.forEach(prod => {

        const tituloLower = prod.titulo.toLowerCase();
        if( prod.categoria.indexOf(termino) >= 0 || 
        tituloLower.indexOf(termino) >= 0 ) {
              this.productosFiltrado.push(prod);
            }
      })
      
  });
 }
}
