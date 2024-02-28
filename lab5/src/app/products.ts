export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  href: string;
  img: string[];
  rating: string;
  category: string;
  like: number;
  liked: boolean;
  currentImageIndex: number;
}

export const products = [
  {
    id: 1,
    name: 'Car Cover 23458676 серый',
    price: 8000,
    description: 'Подойдет для вашего авто',
    href: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    img:[
      'https://resources.cdn-kaspi.kz/img/m/p/h54/h4f/64911656058910.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hdc/hc5/70328869355550.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9e/h0a/70328869650462.jpg?format=gallery-medium'
    ],
    rating: '4.5',
    category: 'Автотовары',
    like: 855,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 2,
    name: 'CAR подсветка 893680',
    price: 8000,
    description: 'Идеальная подсветка',
    href: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000',
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/h9d/hab/84692852932638.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha2/hdd/84692852998174.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h89/h03/84692853063710.jpg?format=gallery-medium'
    ],
    rating: '4.6',
    category: 'Автотовары',
    like: 120,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 3,
    name: 'Автомобильная визитка CAR ',
    price: 8000,
    description: 'Авто визитка',
    href: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/h82/h6a/69219763060766.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h89/hf1/69219763322910.jpg?format=gallery-medium'
    ],
    rating: '4.9',
    category: 'Автотовары',
    like: 500,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 4,
    name: 'Apple MacBook Air 13',
    price: 8000,
    description: 'MGN93 серебристый',
    href: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-medium',
  'https://resources.cdn-kaspi.kz/img/m/p/hf9/h31/64082981224478.jpg?format=gallery-medium',
  'https://resources.cdn-kaspi.kz/img/m/p/hf8/he3/64082978111518.jpg?format=gallery-medium'
  ],
    rating: '4.7',
    category: 'Компьютеры',
    like: 100,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 5,
    name: 'Chuwi HeroBook Pro 14.1',
    price: 8000,
    description: 'B08316YSKH серебристый',
    href: 'https://kaspi.kz/shop/p/chuwi-herobook-pro-14-1-b08316yskh-serebristyi-101675028/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hfd/hed/64321380974622.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/hee/hd1/64321418035230.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h56/h5a/64321420034078.jpg?format=gallery-medium'
  ],
    rating: '4.8',
    category: 'Компьютеры',
    like: 100,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 6,
    name: 'ASUS TUF Gaming F15',
    price: 8000,
    description: 'HN040 90NR0724-M00ZS0 черный',
    href: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-fx506hc-hn040-90nr0724-m00zs0-chernyi-114694062/?c=750000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h52/h28/84526606942238.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/hd6/ha0/84526607007774.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h52/h28/84526606942238.jpg?format=gallery-medium'
  ],
    rating: '4.7',
    category: 'Компьютеры',
    like: 100,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 7,
    name: 'Apple MacBook Pro 16',
    price: 8000,
    description: 'MK183 серый',
    href: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-mk183-seryi-102892102/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h88/h18/64372891975710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4a/h4f/64372927299614.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd3/hb3/64372936474654.jpg?format=gallery-medium'
  ],
    rating: '4.5',
    category: 'Компьютеры',
    like: 100,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 8,
    name: 'Dream Machines',
    price: 8000,
    description: ' RG3050Ti-15KZ25 черный',
    href: 'https://kaspi.kz/shop/p/dream-machines-rg3050ti-15kz25-chernyi-103582336/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h3e/h0e/64841481158686.jpg?format=gallery-medium',
  'https://resources.cdn-kaspi.kz/img/m/p/h89/h56/64841484107806.jpg?format=gallery-medium',
  'https://resources.cdn-kaspi.kz/img/m/p/hbc/h4c/64841487024158.jpg?format=gallery-medium'
  ],
    rating: '4.6',
    category: 'Компьютеры',
    like: 100,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 9,
    name: 'Цитрамон П таблетки 240 мг',
    price: 8000,
    description: 'При головной или зубной боли',
    href: 'https://kaspi.kz/shop/p/lg-43up76006lc-109-sm-chernyi-101585668/?c=750000000',
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/h46/hc1/63963912962078.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h46/hc1/63963912962078.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h46/hc1/63963912962078.jpg?format=gallery-medium'
  ],
    rating: '4.8',
    category: 'Аптека',
    like: 100,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 10,
    name: 'California Gold Nutrition ',
    price: 8000,
    description: 'БАД',
    href: 'https://kaspi.kz/shop/p/xiaomi-l32m7-earu-81-sm-chernyi-108977524/?c=750000000',
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/h0f/hd1/63863964336158.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha9/h78/63863967154206.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h01/h68/63863970431006.jpg?format=gallery-medium'
    ],
    rating: '4.9',
    category: 'Аптека',
    like: 100,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 11,
    name: 'Пластырь 10 шт стерильно',
    price: 8000,
    description: 'Лечить все раны',
    href: 'https://www.sulpak.kz/g/televizoriy_arg_ld40s6500',
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/h18/hf1/64236580372510.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h18/hf1/64236580372510.jpg?format=gallery-medium',      
      'https://resources.cdn-kaspi.kz/img/m/p/h18/hf1/64236580372510.jpg?format=gallery-medium',    
    ],
    rating: '4.8',
    category: 'Аптека',
    like: 100,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 12,
    name: 'Терафлю порошок 325 мг',
    price: 8000,
    description: 'Борется с симптомами простуды и гриппа',
    href: 'https://www.sulpak.kz/g/televizoriy_samsung_ue32t5300auxc',
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/heb/hf3/64143706423326.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h7e/h4b/64143709536286.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h5b/h9e/64143712092190.jpg?format=gallery-medium'
    ],
    rating: '4.8',
    category: 'Аптека',
    like: 100,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 13,
    name: 'Алтайвитамины БАД Аскорбиновая кислота 200 драже',
    price: 8000,
    description: 'Защита иммунитета',
    href: 'https://www.sulpak.kz/g/televizoriy_haier_32_s1',
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/ha9/hc1/63943577534494.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h95/hcd/63943580188702.jpg?format=gallery-medium',
    ],
    rating: '4.8',
    category: 'Аптека',
    like: 100,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 14,
    name: 'Часы в салон Toyota',
    price: 8000,
    description: 'Красивые часы',
    href: 'https://www.sulpak.kz/g/smartfoniy_samsung_galaxy_s24_ultra_512gb_titanium_black_sm_s928bzkhskz',
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/he0/hfa/82242022572062.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h68/hbf/82242023129118.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h94/had/82242023587870.jpg?format=gallery-medium'
    ],
    rating: '4.8',
    category: 'Автотовары',
    like: 100,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 15,
    name: ' Car Cover тент 436732157 серебристый',
    price: 8000,
    description: 'Коврик для ващего зверя',
    href: 'https://www.sulpak.kz/g/smartfoniy_samsung_galaxy_s24_256gb_amber_yellow_sm_s921bzygskz',
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/h65/h45/65099729305630.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h6a/h73/65099731533854.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hd1/he6/65099733958686.jpg?format=gallery-medium'
    ],
    rating: '4.9',
    category: 'Автотовары',
    like: 100,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 16,
    name: 'Креатин Maxler 100% Golden Creatine 300 г',
    price: 8000,
    description: 'Спортивная добавка',
    href: 'https://www.sulpak.kz/g/podrostkoviyj_velosiped_phoenix_tr19s2003jl_588_292',
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/h63/h50/63758370701342.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3d/hf7/63758371553310.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h47/h22/63758372241438.jpg?format=gallery-medium'
    ],
    rating: '4.7',
    category: 'Спорт, туризм',
    like: 100,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 17,
    name: 'Классический термос Супермаркет Посуды 0.5 л ',
    price: 8000,
    description: 'Держить температуры воды',
    href: 'https://www.sulpak.kz/g/velosiped_gorniyj_magic_4_0_seriyj_588_614',
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/h61/hd6/64355770892318.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h52/h39/64355774005278.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc0/hf4/64355777019934.jpg?format=gallery-medium'
    ],
    rating: '4.8',
    category: 'Спорт, туризм',
    like: 100,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 18,
    name: 'Коврик Yoga Mat 170x60x0.6 см 183x60x0.6 см розовый',
    price: 150000,
    description: 'Коврик для занятии йогой',
    href: 'https://www.sulpak.kz/g/kreplenie_na_grud_dlya_ekshn_kameriy_gopro_chest_mount_harness_chesty',
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/ha9/hea/64080404807710.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha9/hea/64080404807710.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h81/h45/64080476373022.jpg?format=gallery-medium'
    ],
    rating: '4.9',
    category: 'Спорт, туризм',
    like: 100,
    liked: false,
    currentImageIndex: 0,
  },
  {
    id: 19,
    name: 'Беговая дорожка Genau iTech R5',
    price: 150000,
    description: 'Исключительная технологичность',
    href: 'https://www.sulpak.kz/g/begoviye_dorozhki_genau_itech_r5',
    img: [
      'https://object.pscloud.io/cms/cms/Photo/img_0_1378_90_7_1.webp',
      'https://object.pscloud.io/cms/cms/Photo/img_0_1378_90_0_1.webp',
      'https://object.pscloud.io/cms/cms/Photo/img_0_1378_90_1_1.webp'
    ],
    rating: '4.9',
    category: 'Спорт, туризм',
    like: 100,
    liked: false,
    currentImageIndex: 0,
  },
  /**
   * Product object representing a single product 
   * @param {number} id - Unique identifier for the product
   * @param {string} name - Name of the product 
   * @param {number} price - Price of the product
   * @param {string} description - Description of the product
   * @param {string} href - URL to the product page 
   * @param {string[]} img - Array of image URLs for the product
   * @param {string} rating - Product rating 
   * @param {string} category - Product category
   * @param {number} like - Number of likes for the product
   * @param {boolean} liked - Whether the product is liked
   * @param {number} currentImageIndex - Index of the currently displayed image
  */
  {
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
    currentImageIndex: 0,
  }
];