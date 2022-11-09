import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Lista', url: 'listar', icon: 'list' },
    { title: 'Ir a Pagar', url: 'carrito-modal', icon: 'bag-check' },
    { title: 'Comprar', url: 'folder', icon: 'cart' }
  ];
  constructor() {}
}
