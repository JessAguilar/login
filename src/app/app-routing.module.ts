import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'Register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'Login', loadChildren: './login/login.module#loginPageModule' },
  { path: 'Inventario', loadChildren: './inventario/inventario.module#InventarioPageModule' },
  { path: 'Compra', loadChildren: './compra/compra.module#CompraPageModule' },
  { path: 'TablaIngEgr', loadChildren: './tabla-ing-egr/tabla-ing-egr.module#TablaIngEgrPageModule' },  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
