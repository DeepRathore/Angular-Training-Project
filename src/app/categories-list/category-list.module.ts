import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListRoutingModule } from './category-list-routing.module'
import { CategoriesListComponent } from './categories-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    CategoryListRoutingModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatCardModule
  ],
  declarations: [CategoriesListComponent]
})
export class CategoryListModule { }

