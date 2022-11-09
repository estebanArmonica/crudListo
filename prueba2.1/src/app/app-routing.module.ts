import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./paginas/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./paginas/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./paginas/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'eliminar/:id',
    loadChildren: () => import('./paginas/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'actualizar/:id',
    loadChildren: () => import('./paginas/actualizar/actualizar.module').then( m => m.ActualizarPageModule)
  },
  {
    path: 'carrito-modal',
    loadChildren: () => import('./pages/carrito-modal/carrito-modal.module').then( m => m.CarritoModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
