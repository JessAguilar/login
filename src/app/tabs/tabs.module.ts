import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { AboutPageModule } from '../about/about.module';
import { HomePageModule } from '../home/home.module';
import {CompraPageModule}from '../compra/compra.module';

import { PagVentaPageModule } from '../pag-venta/pag-venta.module';
import { TablaIngEgrPageModule } from '../tabla-ing-egr/tabla-ing-egr.module';
import { Inventario2PageModule } from '../inventario2/inventario2.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    ContactPageModule,
    PagVentaPageModule,
      CompraPageModule,
    TablaIngEgrPageModule,
    Inventario2PageModule

  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
