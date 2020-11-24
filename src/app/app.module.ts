import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { VendorComponent } from './vendor/vendor.component';
import { RequestComponent } from './request/request.component';
import { CoreComponent } from './core/core.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { MenuComponent } from './menu/menu.component';
import { MenuitemComponent } from './menu/menuitem/menuitem.component';
import { ProductComponent } from './product/product.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { BoolPipe } from './core/pipes/bool.pipe';
import { SortPipe } from './core/pipes/sort.pipe';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestApproveComponent } from './request/request-approve/request-approve.component';
import { RequestReviewComponent } from './request/request-review/request-review.component';
import { LineItemComponent } from './line-item/line-item.component';
import { LineItemCreateComponent } from './line-item/line-item-create/line-item-create.component';
import { LineItemEditComponent } from './line-item/line-item-edit/line-item-edit.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { HiddenPipe } from './core/pipes/hidden.pipe';
import { RequestlinesComponent } from './requestline/requestlines.component';
import { RouterModule } from '@angular/router';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    VendorComponent,
    RequestComponent,
    CoreComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    MenuitemComponent,
    ProductComponent,
    UserListComponent,
    UserEditComponent,
    UserDetailComponent,
    UserCreateComponent,
    ProductCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorCreateComponent,
    BoolPipe,
    SortPipe,
    UserLoginComponent,
    RequestCreateComponent,
    RequestEditComponent,
    RequestDetailComponent,
    RequestApproveComponent,
    RequestReviewComponent,
    LineItemComponent,
    LineItemCreateComponent,
    LineItemEditComponent,
    ProductEditComponent,
    ProductDetailComponent,
    HiddenPipe,
    RequestlinesComponent,
    RequestLinesComponent,
    RequestlineEditComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

