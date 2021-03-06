import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProviderJoinComponent } from './provider-join/provider-join.component';
import { FindMeComponent } from './components/find-me/find-me.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FlowerbouquetDetailsComponent } from './components/flowerbouquet-details/flowerbouquet-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import{MatInputModule} from '@angular/material/input'
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import 'hammerjs';
import { OrderComponent } from './components/order/order.component';
import { UserCartComponent } from './components/user-cart/user-cart.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { ActionApproveComponent } from './components/action-approve/action-approve.component';
import { OrderPaymentComponent } from './components/order-payment/order-payment.component';
import { AddressRegisterationComponent } from './components/address-registeration/address-registeration.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import {MatStepperModule} from '@angular/material/stepper';
import { CatalogComponent } from './components/catalog/catalog.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BouquetPageComponent } from './components/bouquet-page/bouquet-page.component';
import { ManageAccountComponent } from './components/manage-account/manage-account.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProviderJoinComponent,
    FindMeComponent,
    FlowerbouquetDetailsComponent,
    LoginComponent,
    RegisterComponent,
    OrderComponent,
    UserCartComponent,
    ActionApproveComponent,
    OrderPaymentComponent,
    AddressRegisterationComponent,
    HomeComponent,
    AboutUsComponent,
    OrderHistoryComponent,
    HowItWorksComponent,
    CatalogComponent,
    BouquetPageComponent,
    ManageAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatBottomSheetModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatStepperModule,
    FilterPipeModule,
    NgbModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
