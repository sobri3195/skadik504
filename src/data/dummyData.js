export const announcements = [
  'Jadwal pembelajaran FASH dimulai setiap Senin pukul 08.00.',
  'Pembukaan materi BLS batch terbaru telah tersedia.',
  'Pengumpulan tugas praktik maksimal H+7 setelah materi selesai.',
  'Ujian berbasis waktu dilaksanakan setiap akhir pekan.',
]

export const features = [
  'Materi Pembelajaran','Video Praktik BLS','Simulasi Interaktif','Forum Diskusi','Tugas / Assignment','Kuis / Ujian',
]

export const fashMaterials = [
  'Pengantar Basic Life Support','Keselamatan Penolong dan Pasien','Pemeriksaan Dangerous','Pemeriksaan Respons AVPU','Teknik Meminta Bantuan','Pemeriksaan Circulation','Pemeriksaan Breathing','Evaluasi Awal Korban',
].map((title, i) => ({ id: `M${i+1}`, title, description: `Materi ${title}`, duration: `${15 + i*3} menit`, level: i < 3 ? 'Dasar' : 'Menengah', status: 'Belum Mulai' }))

export const fashVideos = [
  'Praktik Pemeriksaan Keamanan Lokasi','Praktik Cek Respons Pasien','Praktik Meminta Bantuan','Praktik Pemeriksaan Napas','Praktik Kompresi Dada','Praktik Evaluasi Korban',
].map((title, i) => ({ id: `V${i+1}`, title, description: `Video demonstrasi ${title}`, duration: `${8+i} menit` }))

export const blsSimulationSteps = [
  { key: 'D', title: 'Dangerous', description: 'Pastikan penolong dan pasien aman.' },
  { key: 'R', title: 'Respons', description: 'Periksa respons pasien dengan AVPU.' },
  { key: 'H', title: 'Minta Tolong', description: 'Panggil bantuan atau aktifkan sistem darurat.' },
  { key: 'C', title: 'Circulation', description: 'Periksa sirkulasi.' },
  { key: 'B', title: 'Breathing', description: 'Lihat, dengar, dan rasakan napas.' },
]

const kejuruan = ['Sesarcabkes','Sejurbakes Khusus','Sejurbakes','Sejurba Psikologi','Sejurba Jasmil','Sejurba Farmasi','Susbamenjurkes','Susbamenjur Psikologi','Susbamenjur Jasmil','Susjurlatakes','Susjurlata Jasmil','Sejursartakes','Sejursarta Psikologi','Sejursarta Jasmil','Sejursarta Farmasi','Diklatjur PNS Gol. II Kes']
const dikkualsus = ['Susdokbangan','Suswatbangan','Suskesbangan','Suspa Tester Psikologi','Suspa Apoteker','Sus OPA','Susba Tester Psikologi','Suster Keswa','Suskeslap Pasgat']
export const educationPrograms = [...kejuruan.map((name,i)=>({id:`k-${i+1}`,name,category:'Kejuruan'})), ...dikkualsus.map((name,i)=>({id:`d-${i+1}`,name,category:'Dikkualsus'}))].map((p,i)=>({...p, materials:6+i%4,videos:4+i%3,simulations:2+i%2,progress:20+(i*7)%80,description:`Program ${p.name} untuk penguatan kompetensi kesehatan militer.`}))

export const assignments = [
  { id: 'A1', title: 'Tugas Resume Materi BLS', description: 'Buat ringkasan materi inti BLS.' , dueInDays: 7 },
  { id: 'A2', title: 'Tugas Analisis Kasus Pasien Tidak Sadar', description: 'Analisis langkah penanganan kasus.' , dueInDays: 10 },
  { id: 'A3', title: 'Tugas Laporan Praktik BLS', description: 'Susun laporan praktik BLS lapangan.' , dueInDays: 14 },
]

export const quizQuestions = [
  { id:1, q:'Apa langkah pertama sebelum menolong korban?', options:['Memberikan minum','Memastikan keamanan penolong dan pasien','Langsung melakukan kompresi','Memindahkan korban'], answer:1 },
  { id:2, q:'Apa arti A dalam AVPU?', options:['Action','Alert','Airway','Assistance'], answer:1 },
  { id:3, q:'Kapan penolong harus meminta bantuan?', options:['Setelah korban sadar','Setelah selesai semua tindakan','Setelah mengecek respons dan menemukan kondisi darurat','Tidak perlu meminta bantuan'], answer:2 },
  { id:4, q:'Apa yang diperiksa pada tahap Breathing?', options:['Warna pakaian','Napas korban','Identitas korban','Suhu ruangan'], answer:1 },
  { id:5, q:'Apa tujuan utama BLS?', options:['Memberikan pertolongan dasar untuk mempertahankan kehidupan','Memberikan obat','Membuat laporan','Mengganti perawatan rumah sakit'], answer:0 },
]

export const dummyUsers = [{username:'peserta01', role:'Peserta'},{username:'instruktur01', role:'Instruktur'},{username:'admin01', role:'Admin'}]
export const dummyStats = { totalUsers: 120, totalPrograms: educationPrograms.length }
export const initialForumPosts = [{ id: crypto.randomUUID(), author:'Instruktur BLS', title:'Diskusi awal: alur AVPU', category:'BLS', content:'Silakan berbagi pengalaman penerapan AVPU di lapangan.', comments:[], createdAt:new Date().toISOString() }]
