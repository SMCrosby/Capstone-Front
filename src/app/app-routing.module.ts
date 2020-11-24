import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { UserComponent } from './user/user.component';
import { VendorComponent } from './vendor/vendor.component';
import { ProductComponent } from './product/product.component';
import { RequestComponent } from './request/request.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestReviewComponent } from './request/request-review/request-review.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestlinesComponent } from './requestline/requestlines.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';



const routes: Routes = [
  { path: "", redirectTo: "/users/login", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },

  { path: "users", component: UserComponent },
  { path: "users/list", component: UserListComponent },
  { path: "users/edit/:id", component: UserEditComponent },
  { path: "users/details/:id", component: UserDetailComponent },
  { path: "users/create", component: UserCreateComponent },
  { path: "users/login", component: UserLoginComponent },

  { path: "vendors", component: VendorComponent },
  { path: "vendors/edit/:id", component: VendorEditComponent },
  { path: "vendors/details/:id", component: VendorDetailComponent },
  { path: "vendors/create", component: VendorCreateComponent },

  { path: "products", component: ProductComponent },
  { path: "products/edit/:id", component: ProductEditComponent },
  { path: "products/details/:id", component: ProductDetailComponent },
  { path: "products/create", component: ProductCreateComponent },

  { path: "requests", component: RequestComponent },
  { path: "requests/edit/:id", component: RequestEditComponent },
  { path: "requests/lines/:id", component: RequestLinesComponent },
  { path: "requests/details/:id", component: RequestDetailComponent },
  { path: "requests/review", component: RequestReviewComponent },
  { path: "requests/create", component: RequestCreateComponent},

  { path: "requestlines/:id", component: RequestlinesComponent },
  { path: "requestlines/edit/:id", component: RequestlineEditComponent },
  { path: "requestlines/create", component: RequestlineCreateComponent },




  { path: "**", component: E404Component }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
