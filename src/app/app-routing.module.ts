import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { FindMeComponent } from './components/find-me/find-me.component';
import { HomeComponent } from './components/home/home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserCartComponent } from './components/user-cart/user-cart.component';
import { ProviderJoinComponent } from './provider-join/provider-join.component';

const routes: Routes = [
{path: 'provider-join',component: ProviderJoinComponent},
{path:'find-me',component:FindMeComponent},
{path:'login',component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'register',component:RegisterComponent},
{path:'user-cart',component:UserCartComponent},
{path:'about-us',component:AboutUsComponent},
{path:'how-it-works',component:HowItWorksComponent},
{path:'catalog',component:CatalogComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
