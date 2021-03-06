import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component'
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
@NgModule({imports: [RouterModule.forRoot(appRoutes)], exports: [RouterModule]})
export class AppRoutingModule {}
