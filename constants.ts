import { Product } from './types';

export const BRANDS = ['Chanel', 'Dior', 'Tom Ford', 'Creed', 'YSL', 'Père-Fumes Private Collection'];
export const SCENT_TYPES = ['Floral', 'Woody', 'Oriental', 'Fresh', 'Citrus', 'Spicy'];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Noir de Nuit',
    brand: 'Père-Fumes Private Collection',
    price: 180,
    gender: 'Unisex',
    scentType: 'Oriental',
    description: 'An enchanting blend of oud and rose, capturing the mysterious essence of a Beirut night.',
    image: 'https://picsum.photos/seed/perfume1/500/500',
    rating: 4.9,
    reviews: 124,
    notes: ['Black Rose', 'Oud', 'Saffron', 'Vanilla'],
    sizes: [
      { label: '50ml', price: 180 },
      { label: '100ml', price: 280 }
    ]
  },
  {
    id: '2',
    name: 'Bleu de Chanel',
    brand: 'Chanel',
    price: 145,
    gender: 'Men',
    scentType: 'Woody',
    description: 'A tribute to masculine freedom in an aromatic-woody fragrance with a captivating trail.',
    image: 'https://picsum.photos/seed/perfume2/500/500',
    rating: 4.8,
    reviews: 890,
    notes: ['Citrus', 'Labdanum', 'Sandalwood', 'Cedar'],
    sizes: [
      { label: '50ml', price: 110 },
      { label: '100ml', price: 145 },
      { label: '150ml', price: 190 }
    ]
  },
  {
    id: '3',
    name: 'Black Orchid',
    brand: 'Tom Ford',
    price: 165,
    gender: 'Women',
    scentType: 'Oriental',
    description: 'A luxurious and sensual fragrance of rich, dark accords and an alluring potion of black orchids and spice.',
    image: 'https://picsum.photos/seed/perfume3/500/500',
    rating: 4.7,
    reviews: 540,
    notes: ['Black Truffle', 'Ylang Ylang', 'Black Orchid', 'Patchouli'],
    sizes: [
      { label: '30ml', price: 95 },
      { label: '50ml', price: 135 },
      { label: '100ml', price: 165 }
    ]
  },
  {
    id: '4',
    name: 'Aventus',
    brand: 'Creed',
    price: 320,
    gender: 'Men',
    scentType: 'Fresh',
    description: 'The exceptional Aventus was inspired by the dramatic life of a historic emperor, celebrating strength, power and success.',
    image: 'https://picsum.photos/seed/perfume4/500/500',
    rating: 4.9,
    reviews: 2100,
    notes: ['Pineapple', 'Birch', 'Musk', 'Bergamot'],
    sizes: [
      { label: '50ml', price: 320 },
      { label: '100ml', price: 435 }
    ]
  },
  {
    id: '5',
    name: 'Libre',
    brand: 'YSL',
    price: 130,
    gender: 'Women',
    scentType: 'Floral',
    description: 'The fragrance of freedom. A statement fragrance for those who live by their own rules.',
    image: 'https://picsum.photos/seed/perfume5/500/500',
    rating: 4.8,
    reviews: 750,
    notes: ['Lavender', 'Orange Blossom', 'Musk', 'Vanilla'],
    sizes: [
      { label: '30ml', price: 85 },
      { label: '50ml', price: 105 },
      { label: '90ml', price: 130 }
    ]
  },
  {
    id: '6',
    name: 'Cedrat Boise',
    brand: 'Père-Fumes Private Collection',
    price: 110,
    gender: 'Unisex',
    scentType: 'Citrus',
    description: 'A vibrant and sparkling citrus opening that dries down into a sophisticated woody base.',
    image: 'https://picsum.photos/seed/perfume6/500/500',
    rating: 4.6,
    reviews: 88,
    notes: ['Lemon', 'Blackcurrant', 'Cedar', 'Leather'],
    sizes: [
      { label: '60ml', price: 80 },
      { label: '120ml', price: 110 }
    ]
  },
  {
    id: '7',
    name: 'Sauvage Elixir',
    brand: 'Dior',
    price: 185,
    gender: 'Men',
    scentType: 'Spicy',
    description: 'An extraordinarily concentrated fragrance steeped in the emblematic freshness of Sauvage with an intoxicating heart of spices.',
    image: 'https://picsum.photos/seed/perfume7/500/500',
    rating: 4.9,
    reviews: 1200,
    notes: ['Grapefruit', 'Cinnamon', 'Nutmeg', 'Cardamom'],
    sizes: [
      { label: '60ml', price: 185 },
      { label: '100ml', price: 250 }
    ]
  },
  {
    id: '8',
    name: 'Baccarat Rouge 540',
    brand: 'Père-Fumes Private Collection',
    price: 250,
    gender: 'Unisex',
    scentType: 'Oriental',
    description: 'Luminous and sophisticated, this fragrance lays on the skin like an amber, floral and woody breeze.',
    image: 'https://picsum.photos/seed/perfume8/500/500',
    rating: 5.0,
    reviews: 320,
    notes: ['Jasmine', 'Saffron', 'Amberwood', 'Fir Resin'],
    sizes: [
      { label: '35ml', price: 150 },
      { label: '70ml', price: 250 },
      { label: '200ml', price: 450 }
    ]
  }
];

export const CONTACT_INFO = {
  address: "Haret Hreik, Beirut, Lebanon",
  phone: "70719335",
  hours: {
    weekdays: "Tuesday–Friday: 4:00 PM – 11:00 PM",
    saturday: "Saturday: 4:00 PM – 11:00 PM",
    monday: "Monday: 4:00 PM – 11:00 PM",
    sunday: "Sunday: Closed"
  }
};