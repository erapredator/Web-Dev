import { Component } from '@angular/core';
import { Product } from '../products'; // Import the Product type

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  shareViaWhatsapp(product: Product) { // Use the imported Product type
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(product.name)}%20-%20${encodeURIComponent(window.location.href)}`;
    window.open(whatsappUrl, '_blank');
  }

  shareViaTelegram(product: Product) { // Use the imported Product type
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(product.name)}`;
    window.open(telegramUrl, '_blank');
  }
  getImageUrl(productId: number): string {
    // Assuming all images have the same file extension (e.g., '.jpg')
    return `assets/images/${productId}.jpg`;
  }
}
