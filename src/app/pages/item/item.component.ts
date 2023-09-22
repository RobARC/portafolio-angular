import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';
import { Producto } from '../../interfaces/productos.interface';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  producto: any;
  id!: string;
  currentDate = formatDate(new Date(), 'dd-MM-yyyy', 'en-US');

  constructor(private route: ActivatedRoute,
              private productoService: ProductosService)
              {}

  ngOnInit(): void {
   this.route.params.subscribe(parametros => {
    console.log(parametros['id']);

    this.productoService.unProducto(parametros['id'])
        .subscribe((resp) => {
          this.id = parametros['id'];
          this.producto = resp;
        });
    
   })
    
  }
}
