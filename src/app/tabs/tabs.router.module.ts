import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraPage } from '../compra/compra.page';
import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { PagVentaPage } from '../pag-venta/pag-venta.page';
import { Inventario2Page } from '../inventario2/inventario2.page';
import { TablaIngEgrPage } from '../tabla-ing-egr/tabla-ing-egr.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage

      },
      {
        path: 'ventas',
        outlet: 'ventas',
        component: PagVentaPage
      },
      {
        path:'compra',
        outlet:'compra',
        component: CompraPage
      },
      {
        path: 'inventario2',
        outlet: 'inventario2',
        component: Inventario2Page
      },
      {
        path: 'TablaIngEgr',
        outlet: 'TablaIngEgr',
        component: TablaIngEgrPage

      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
