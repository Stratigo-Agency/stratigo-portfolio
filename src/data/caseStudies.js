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
    ],
    content: [
      {
        type: 'heading',
        props: {
          text: 'Tantangan',
          size: 'h2'
        }
      },
      {
        type: 'text',
        props: {
          text: 'Travel agency membutuhkan website yang dapat menampilkan berbagai paket wisata dengan menarik, memudahkan proses booking, dan memberikan pengalaman pengguna yang baik.',
          size: 'medium'
        }
      },
      {
        type: 'heading',
        props: {
          text: 'Solusi',
          size: 'h2'
        }
      },
      {
        type: 'text',
        props: {
          text: 'Kami membangun website modern menggunakan Vue.js dan TypeScript dengan sistem booking yang terintegrasi dan galeri destinasi yang menarik.',
          size: 'medium'
        }
      }
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
    ],
    content: []
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
    ],
    content: [
      {
        type: 'heading',
        props: {
          text: 'Overview Proyek',
          size: 'h2'
        }
      },
      {
        type: 'text',
        props: {
          text: 'Sistem AI ini dirancang untuk mengotomatisasi proses pembuatan laporan keuangan yang sebelumnya memakan waktu berjam-jam menjadi hanya beberapa menit.',
          size: 'medium'
        }
      },
      {
        type: 'heading',
        props: {
          text: 'Fitur Utama',
          size: 'h2'
        }
      },
      {
        type: 'list',
        props: {
          items: [
            'Integrasi dengan berbagai sumber data keuangan',
            'Pemrosesan data otomatis menggunakan AI',
            'Generasi laporan dalam berbagai format',
            'Dashboard untuk monitoring real-time'
          ],
          ordered: false,
          size: 'medium'
        }
      }
    ]
  }
]

