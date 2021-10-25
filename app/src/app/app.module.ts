import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './userfolder/user-container/user-container.component';
import { UserListComponent } from './userfolder/user-list/user-list.component';
import { UserDetailComponent } from './userfolder/user-detail/user-detail.component';
import { UserSingleComponent } from './userfolder/user-single/user-single.component';
import { OrderContainerComponent } from './orderfolder/order-container/order-container.component';
import { OrderListComponent } from './orderfolder/order-list/order-list.component';
import { OrderSingleComponent } from './orderfolder/order-single/order-single.component';
import { OrderDetailComponent } from './orderfolder/order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    UserListComponent,
    UserDetailComponent,
    UserSingleComponent,
    OrderContainerComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
