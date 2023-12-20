import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public products: any = [];
  public grandTotal!: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
      });
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
    this.grandTotal = this.cartService.getTotalPrice(); // Update grandTotal after removing item
  }

  emptycart() {
    this.cartService.removeAllCart();
    this.grandTotal = this.cartService.getTotalPrice(); // Update grandTotal after emptying cart
  }
}
