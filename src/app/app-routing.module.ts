import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProviderJoinComponent } from './provider-join/provider-join.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
{path: 'search', component: SearchComponent},
{path: 'contact-us',component: ContactUsComponent},
{path: 'provider-join',component: ProviderJoinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
