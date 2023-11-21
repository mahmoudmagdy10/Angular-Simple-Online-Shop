import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/LayoutComponents/header/header.component';
import { FooterComponent } from './Components/LayoutComponents/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { HighlightDirective } from './Directives/highlight.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { RegisterComponentComponent } from './Components/register-component/register-component.component';
import { ProductsComponent } from './Components/Products/products/products.component';
import { ProductDetailsComponent } from './Components/Products/ProductDetails/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './Components/Shared/main-slider/main-slider.component';
import { CategoryComponent } from './Components/Category/category.component';
import { CartComponent } from './Components/Cart/cart/cart.component';

import { SearchPipe } from './Pips/search.pipe';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { HeaderInterceptor } from './Interceptors/header.interceptor';
import { CategorySliderComponent } from './Components/Category/category-slider/category-slider.component';
import { BrandComponent } from './Components/Brands/brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HighlightDirective,
    LoginComponentComponent,
    RegisterComponentComponent,
    ProductsComponent,
    ProductDetailsComponent,
    MainSliderComponent,
    CategoryComponent,
    SearchPipe,
    CartComponent,
    CheckoutComponent,
    CategorySliderComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HeaderInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
