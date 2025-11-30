import { Recipe } from './types';

export const INITIAL_RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Nasi Goreng Spesial',
    description: 'Menu sarapan favorit keluarga Indonesia dengan cita rasa manis gurih.',
    imageUrl: 'https://picsum.photos/seed/nasigoreng/800/600',
    cookingTime: '15 Menit',
    difficulty: 'Mudah',
    ingredients: [
      '2 piring nasi putih',
      '2 siung bawang putih, cincang',
      '3 siung bawang merah, iris tipis',
      '1 butir telur',
      'Kecap manis secukupnya',
      'Garam dan merica secukupnya',
      'Minyak untuk menumis'
    ],
    instructions: [
      'Panaskan minyak, tumis bawang merah dan bawang putih sampai harum.',
      'Sisihkan bumbu di tepi wajan, masukkan telur, buat orak-arik hingga matang.',
      'Tambahkan nasi putih ke dalam wajan.',
      'Beri kecap manis, garam, dan merica sesuai selera.',
      'Aduk merata dengan api besar hingga nasi agak kering dan bumbu meresap.',
      'Sajikan hangat dengan kerupuk.'
    ]
  },
  {
    id: '2',
    title: 'Soto Ayam Kuning',
    description: 'Sup ayam tradisional dengan kuah kuning yang segar dan kaya rempah.',
    imageUrl: 'https://picsum.photos/seed/sotoayam/800/600',
    cookingTime: '45 Menit',
    difficulty: 'Sedang',
    ingredients: [
      '500g daging ayam',
      '3 siung bawang putih (haluskan)',
      '5 siung bawang merah (haluskan)',
      '2 batang sereh, memarkan',
      '2 cm kunyit (haluskan/bakar sebentar)',
      'Garam dan merica secukupnya',
      'Air secukupnya untuk kuah'
    ],
    instructions: [
      'Rebus ayam dalam air mendidih hingga empuk. Angkat, tiriskan, lalu suwir-suwir dagingnya. Sisihkan air rebusan untuk kaldu.',
      'Tumis bumbu halus (bawang, kunyit) dan sereh hingga wangi dan matang.',
      'Masukkan tumisan bumbu ke dalam panci kuah rebusan ayam.',
      'Tambahkan garam dan merica. Masak hingga mendidih dan bumbu meresap.',
      'Sajikan kuah panas di atas nasi dengan suwiran ayam.'
    ]
  },
  {
    id: '3',
    title: 'Seblak Pedas',
    description: 'Jajanan khas Bandung dengan kerupuk basah dan kuah kencur yang pedas nampol.',
    imageUrl: 'https://picsum.photos/seed/seblak/800/600',
    cookingTime: '20 Menit',
    difficulty: 'Mudah',
    ingredients: [
      '3 siung bawang putih',
      '3 siung bawang merah',
      '3 cm kencur',
      'Cabe rawit sesuai selera',
      'Garam, merica, penyedap rasa',
      '2 lembar daun jeruk',
      'Aneka frozen food (sosis, bakso)',
      'Kerupuk seblak (kerupuk oren)',
      '1 bungkus mie instan',
      '1 butir telur',
      'Sawi hijau, potong-potong',
      'Ceker ayam (opsional, sudah direbus)'
    ],
    instructions: [
      'Rendam kerupuk seblak dengan air panas hingga agak lunak.',
      'Haluskan bawang putih, bawang merah, kencur, dan cabai.',
      'Tumis bumbu halus dan daun jeruk hingga harum.',
      'Masukkan telur, buat orak-arik.',
      'Tuangkan 1 gelas air, biarkan mendidih.',
      'Masukkan kerupuk, mie, ceker, dan aneka frozen food.',
      'Bumbui dengan garam, merica, dan penyedap. Masak hingga air agak menyusut dan bumbu meresap.',
      'Terakhir masukkan sawi, masak sebentar agar tetap renyah. Angkat dan sajikan.'
    ]
  }
];