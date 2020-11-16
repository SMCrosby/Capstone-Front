import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { VendorComponent } from './vendor/vendor.component';
import { RequestComponent } from './request/request.component';
import { RequestlineComponent } from './requestline/requestline.component';
import { CoreComponent } from './core/core.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { MenuComponent } from './menu/menu.component';
import { MenuitemComponent } from './menu/menuitem/menuitem.component';
import { ProductComponent } from './product/product.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    VendorComponent,
    RequestComponent,
    RequestlineComponent,
    CoreComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    MenuitemComponent,
    ProductComponent,
    UserListComponent,
    UserEditComponent
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

