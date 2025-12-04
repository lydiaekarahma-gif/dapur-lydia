import { Recipe } from './types';

export const RECIPES: Recipe[] = [
  {
    id: 'nasi-goreng',
    title: 'Nasi Goreng Spesial',
    description: 'Menu sarapan favorit keluarga Indonesia yang praktis dan lezat.',
    cookingTime: '15 Menit',
    difficulty: 'Mudah',
    ingredients: [
      {
        items: [
          '2 piring nasi putih',
          '2 siung bawang putih',
          '3 siung bawang merah',
          '1 butir telur',
          'Kecap manis, garam, merica secukupnya'
        ]
      }
    ],
    steps: [
      'Tumis bawang merah dan bawang putih sampai harum.',
      'Masukkan telur, orak-arik hingga matang.',
      'Tambahkan nasi, kecap, garam, dan merica.',
      'Aduk merata dan masak hingga sedikit kering.'
    ]
  },
  {
    id: 'soto-ayam',
    title: 'Soto Ayam Kuning',
    description: 'Sup ayam berkuah kuning yang gurih dan menghangatkan tubuh.',
    cookingTime: '45 Menit',
    difficulty: 'Sedang',
    ingredients: [
      {
        items: [
          '500g ayam',
          '3 siung bawang putih',
          '5 siung bawang merah',
          '2 batang sereh, memarkan',
          'Garam, merica, kunyit'
        ]
      }
    ],
    steps: [
      'Rebus ayam hingga empuk, tiriskan dan suwir.',
      'Tumis bumbu halus dan sereh hingga wangi.',
      'Masukkan tumisan ke kuah rebusan ayam.',
      'Tambahkan garam, merica, dan kunyit.'
    ]
  },
  {
    id: 'seblak',
    title: 'Seblak Pedas Gurih',
    description: 'Jajanan khas Bandung dengan cita rasa pedas dan kencur yang khas.',
    cookingTime: '30 Menit',
    difficulty: 'Sedang',
    ingredients: [
      {
        title: 'Bumbu Halus',
        items: [
          '3 siung bawang putih',
          '3 siung bawang merah',
          '3 cm kencur',
          'Garam secukupnya',
          'Merica',
          'Daun jeruk'
        ]
      },
      {
        title: 'Isian Seblak',
        items: [
          'Aneka frozen food (sosis, bakso)',
          'Kerupuk seblak (kerupuk oren)',
          'Mie',
          '1 butir telur',
          'Sawi hijau',
          'Ceker ayam (opsional)'
        ]
      }
    ],
    steps: [
      'Haluskan bawang putih, bawang merah, kemiri, kencur, dan cabai, lalu tumis sampai harum.',
      'Masukan telur, lalu orak-arik di pinggir wajan.',
      'Tambahkan satu gelas air, lalu masukan kerupuk oren. Masak sampai kerupuk mengenyal.',
      'Setelah kerupuk matang, tambahkan mie, sawi, ceker, dan aneka frozen food.',
      'Tambahkan garam dan penyedap, koreksi rasa. Tunggu sampai matang.',
      'Seblak siap disajikan hangat-hangat.'
    ]
  }
];
