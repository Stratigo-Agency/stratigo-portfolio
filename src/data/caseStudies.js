import caseStudy1Image from '../assets/stratigo-ai-demo/demo-1.png'

export const caseStudies = [
  {
    title: 'Travel Agency Website',
    category: 'Custom Website',
    description: 'Membangun website modern untuk travel agency yang menampilkan paket wisata, booking system, dan galeri destinasi.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
    technologies: ['Vue.js', 'TypeScript', 'API'],
    results: [
      { value: '50+', label: 'Paket Wisata' },
      { value: '3x', label: 'Peningkatan Booking' }
    ]
  },
  {
    title: 'Company Website untuk Brand Otomotif',
    category: 'Custom Website',
    description: 'Membangun website perusahaan untuk brand otomotif yang menjual berbagai produk kendaraan.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['Vue.js', 'TypeScript'],
    results: [
      { value: '20+', label: 'Foto produk' },
      { value: '4+', label: 'Tahun pengalaman' }
    ]
  },
  {
    title: 'AI untuk Financial Reporting',
    category: 'Custom Software',
    description: 'Membangun sistem Artificial Intelligence yang secara otomatis menghasilkan laporan keuangan dari berbagai sumber data.',
    image: caseStudy1Image,
    technologies: ['Python', 'SQL', 'Vue', 'AI'],
    results: [
      { value: '90%', label: 'Pengurangan Waktu Manual' },
      { value: '99%', label: 'Akurasi Data' }
    ]
  }
]
