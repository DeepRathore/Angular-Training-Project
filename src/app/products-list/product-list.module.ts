import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CartListComponent } from '../cart-list/cart-list.component';
import { MatListModule } from '@angular/material/list';
import { CartTotalComponent } from '../cart-total/cart-total.component';

@NgModule({
  imports: [
    CommonModule,
    ProductListRoutingModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ],
  declarations: [
    ProductsListComponent,
    CartListComponent,
    CartTotalComponent
  ]
})
export class ProductListModule { }

