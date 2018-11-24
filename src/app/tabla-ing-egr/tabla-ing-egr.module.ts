import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TablaIngEgrPage } from './tabla-ing-egr.page';

const routes: Routes = [
  {
    path: '',
    component: TablaIngEgrPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TablaIngEgrPage]
})
export class TablaIngEgrPageModule {}
