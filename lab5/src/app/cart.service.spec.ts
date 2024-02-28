import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {

  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should create product', () => {
    const product = {
      id: 20,
      name: 'Camp Master кресло Traveltop Chair-200 хаки',
      price: 350000,
      description: '6.7-inch Super Retina XDR display, A16 Bionic chip, Pro camera system',
      href: 'https://www.sulpak.kz/g/elektrosamokat_xiaomi_mijia_smart_electric_scooter_pro_2_4025gl_cherniyj_770_71',
      img: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/hd8/64351112822814.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7a/h1e/64351116558366.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf8/h6b/64351118852126.jpg?format=gallery-medium'
      ],
      rating: '4.9',
      category: 'Спорт, туризм',
      like: 100,
      liked: false,
      currentImageIndex: 0
    };

    service.addProduct(product);

    expect(service.getProducts().length).toBe(1);
    expect(service.getProducts()[0]).toEqual(product);
  });

  it('should toggle product like', () => {
    const product = {
      id: 20,
      liked: false
    };

    service.addProduct(product);

    service.toggleProductLike(20);

    expect(service.getProducts()[0].liked).toBeTrue();
  });

});
