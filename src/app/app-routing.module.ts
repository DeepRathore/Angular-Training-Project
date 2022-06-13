import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './auth/auth.guard';
import { CartComponent } from './cart/cart.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProfileComponent } from './profile-component/profile-component';

const routes: Routes = [
  {path: '', component: CategoriesListComponent},
  {path: 'products', component: ProductsListComponent},
  {path: 'products/category/:id', component: ProductsListComponent, canActivate: [ AuthGuard ]},
  {path: 'profile', component: ProfileComponent, canActivate: [ AuthGuard ]},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'cart', component: CartComponent, canActivate: [ AuthGuard ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
