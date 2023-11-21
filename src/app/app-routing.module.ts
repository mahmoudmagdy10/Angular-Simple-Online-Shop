import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponentComponent } from './Components/register-component/register-component.component';
import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { AuthGuard } from './Guards/auth.guard';
import { ProductDetailsComponent } from './Components/Products/ProductDetails/product-details/product-details.component';
import { ProductsComponent } from './Components/Products/products/products.component';
import { CartComponent } from './Components/Cart/cart/cart.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { CategoryComponent } from './Components/Category/category.component';
import { BrandComponent } from './Components/Brands/brand/brand.component';

const routes: Routes = [
                        //{path:'Home', canActivate : [AuthGuard] ,component: HomeComponent},
                        {path:'Home' ,canActivate : [AuthGuard] ,component: HomeComponent},
                        {path:'Products', canActivate : [AuthGuard] ,component: ProductsComponent},
                        {path:'Productdetails/:id', canActivate : [AuthGuard] ,component: ProductDetailsComponent},
                        {path:'Cart', canActivate : [AuthGuard] ,component: CartComponent},
                        {path:'Categories', canActivate : [AuthGuard] ,component: CategoryComponent},
                        {path:'Brands', canActivate : [AuthGuard] ,component: BrandComponent},
                        {path:'Checkout', canActivate : [AuthGuard] ,component: CheckoutComponent},
                        {path:'Register', component: RegisterComponentComponent},
                        {path:'LogIn', component: LoginComponentComponent},
                        {path:'Settings', canActivate : [AuthGuard] ,loadChildren: ()=> import('./Modules/settings/settings.module').then((m)=>m.SettingsModule)},
                        {path:'', redirectTo: '/Register', pathMatch : 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
