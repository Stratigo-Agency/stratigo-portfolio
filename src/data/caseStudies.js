import previewImage from '../assets/preview.jpg'

export const caseStudies = [
  {
    id: 'travel-agency-website',
    title: 'Travel Agency Website',
    category: 'Custom Website',
    description: 'Membangun website modern untuk travel agency yang menampilkan paket wisata, booking system, dan galeri destinasi.',
    image: previewImage,
    technologies: ['Vue.js', 'TypeScript', 'API'],
    results: [
      { value: '50+', label: 'Paket Wisata' },
      { value: '3x', label: 'Peningkatan Booking' }
    ]
  },
  {
    id: 'company-website-brand-otomotif',
    title: 'Company Website untuk Brand Otomotif',
    category: 'Custom Website',
    description: 'Membangun website perusahaan untuk brand otomotif yang menjual berbagai produk kendaraan.',
    image: previewImage,
    technologies: ['Vue.js', 'TypeScript'],
    results: [
      { value: '20+', label: 'Foto produk' },
      { value: '4+', label: 'Tahun pengalaman' }
    ]
  },
  {
    id: 'ai-financial-reporting',
    title: 'AI untuk Financial Reporting',
    category: 'Custom Software',
    description: 'Membangun sistem Artificial Intelligence yang secara otomatis menghasilkan laporan keuangan dari berbagai sumber data.',
    image: previewImage,
    technologies: ['Python', 'SQL', 'Vue', 'AI'],
    results: [
      { value: '90%', label: 'Pengurangan Waktu Manual' },
      { value: '99%', label: 'Akurasi Data' }
    ]
  }
]
