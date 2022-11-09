import { Product, CarritoService } from '../../services/carrito.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-carrito-modal',
  templateUrl: './carrito-modal.page.html',
  styleUrls: ['./carrito-modal.page.scss'],
})
export class CarritoModalPage implements OnInit {

  cart: Product[] = [];

  constructor(private CarritoService: CarritoService, private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.cart = this.CarritoService.getCart();
  }

  decreaseCartItem(product) {
    this.CarritoService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.CarritoService.addProduct(product);
  }

  removeCartItem(product) {
    this.CarritoService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  async checkout() {


    let alert = await this.alertCtrl.create({
      header: 'Gracias por tu orden!',
      message: 'Enviaremos su producto lo mas pronto posible',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
  }

  async cancelar(){
    let alert = await this.alertCtrl.create({
      header: 'Entendemos!',
      message: 'su producto ha sido eliminado.',
      buttons: ['OK']
    });
    alert.present().then(() =>{
      this.modalCtrl.dismiss();
    })
  }

}
