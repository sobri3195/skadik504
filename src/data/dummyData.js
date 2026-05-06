export const announcements = [
  'Jadwal pembelajaran FASH dimulai setiap Senin pukul 08.00 WIB.',
  'Pembukaan materi AEROFORCE-BLS batch penelitian tesis telah tersedia untuk peserta terdaftar.',
  'Pengumpulan tugas praktik maksimal H+7 setelah materi dan video praktik selesai dipelajari.',
  'Kuis berbasis waktu dan evaluasi simulasi dilaksanakan setiap akhir pekan.',
]

export const stats = [
  ['26', 'Program Pendidikan', 'Kejuruan dan Dikkualsus'],
  ['8', 'Materi FASH', 'BLS dan kesehatan penerbangan'],
  ['6', 'Video Praktik', 'Demonstrasi tindakan lapangan'],
  ['2', 'Mode Simulasi BLS', 'Satu dan dua penolong'],
]

export const features = [
  { icon: '📚', title: 'Materi Pembelajaran', text: 'Modul terstruktur untuk FASH, BLS, kesehatan penerbangan, dan program pendidikan kesehatan militer.' },
  { icon: '🎥', title: 'Video Praktik BLS', text: 'Video demonstrasi praktik untuk memperkuat keterampilan prosedural peserta.' },
  { icon: '🩺', title: 'Simulasi Interaktif', text: 'Latihan alur keputusan D-R-C-B, AVPU, RJP, ambubag, dan indikator SpO2.' },
  { icon: '💬', title: 'Forum Diskusi', text: 'Ruang interaksi peserta, dosen, instruktur, dan kelompok belajar.' },
  { icon: '📝', title: 'Tugas / Assignment', text: 'Unduh instruksi, unggah jawaban, pantau status, nilai, dan feedback.' },
  { icon: '⏱️', title: 'Kuis / Ujian', text: 'Evaluasi berbasis waktu dengan hasil nilai dan umpan balik setelah pengerjaan.' },
]

export const dashboardCards = [
  ['Ringkasan Progress Belajar', '72%', 'Progress rata-rata materi, video, simulasi, dan kuis aktif.'],
  ['Program yang Diikuti', '3', 'FASH, AEROFORCE-BLS, dan Kesehatan Penerbangan.'],
  ['Materi Terakhir Dibuka', 'Respons AVPU', 'Lanjutkan dari modul pemeriksaan respons pasien.'],
  ['Tugas Aktif', '2', 'Resume BLS dan laporan praktik penanganan pasien tidak sadar.'],
  ['Kuis Aktif', '1', 'Tes akhir BLS berbasis waktu 30 menit.'],
  ['Forum Terbaru', '4 Topik', 'Diskusi triase, AVPU, ambubag, dan SpO2.'],
  ['Sertifikat / Hasil', '1 Draft', 'Rekap hasil belajar siap diverifikasi instruktur.'],
  ['Kalender Kegiatan', '5 Agenda', 'Praktik, kuis, simulasi, pengumpulan tugas, dan evaluasi.'],
  ['Notifikasi', '7', 'Pengumuman akademik dan batas waktu pengerjaan.'],
]

export const roleMenus = {
  Admin: ['Kelola user', 'Kelola program', 'Kelola materi', 'Kelola tugas', 'Kelola kuis', 'Kelola forum', 'Laporan progress peserta'],
  Peserta: ['Lihat program', 'Buka materi', 'Tonton video', 'Ikuti simulasi', 'Kerjakan tugas', 'Kerjakan kuis', 'Lihat nilai/progress'],
  Instruktur: ['Upload materi', 'Upload video', 'Buat tugas', 'Buat kuis', 'Cek jawaban peserta', 'Beri nilai dan feedback'],
}

export const fashMaterials = [
  'Pengantar Basic Life Support','Keselamatan Penolong dan Pasien','Pemeriksaan Dangerous','Pemeriksaan Respons AVPU','Teknik Meminta Bantuan','Pemeriksaan Circulation dan SpO2','Pemeriksaan Breathing','Evaluasi Awal Korban',
].map((title, i) => ({ id: `M${i + 1}`, title, description: `Materi ${title} untuk konteks FASH dan kesehatan penerbangan.`, duration: `${15 + i * 3} menit`, level: i < 3 ? 'Dasar' : 'Menengah', status: 'Belum Mulai' }))

export const fashVideos = [
  'Praktik Pemeriksaan Keamanan Lokasi','Praktik Cek Respons Pasien','Praktik Meminta Bantuan','Praktik Pemeriksaan Sirkulasi dan SpO2','Praktik Kompresi Dada','Praktik Ambubag Dua Penolong',
].map((title, i) => ({ id: `V${i + 1}`, title, description: `Video demonstrasi ${title}.`, duration: `${8 + i} menit` }))

export const blsSimulationSteps = [
  { key: 'D', title: 'Dangerous', description: 'Memastikan penolong, pasien, dan lingkungan aman sebelum tindakan.' },
  { key: 'R', title: 'Respons AVPU', description: 'Cek kesadaran dengan AVPU: Alert, Verbal, Pain, Unresponsive.' },
  { key: 'H', title: 'Minta Tolong', description: 'Aktifkan bantuan, panggil tim kesehatan, dan siapkan AED/peralatan.' },
  { key: 'C', title: 'Circulation', description: 'Cek sirkulasi darah, nadi, perdarahan, dan waspadai indikator SpO2 <95%.' },
  { key: 'B', title: 'Breathing', description: 'Lihat, dengar, dan rasa napas korban secara cepat dan sistematis.' },
]

export const simulationModes = [
  { title: 'Satu Penolong', icon: '🫀', text: 'Fokus pada RJP berkualitas, aktivasi bantuan, dan evaluasi respons korban.' },
  { title: 'Dua Penolong', icon: '🫁', text: 'Satu penolong melakukan RJP, satu penolong menggunakan ambubag dan memantau jalan napas.' },
]

const kejuruan = ['Sesarcabkes','Sejurbakes Khusus','Sejurbakes','Sejurba Psikologi','Sejurba Jasmil','Sejurba Farmasi','Susbamenjurkes','Susbamenjur Psikologi','Susbamenjur Jasmil','Susjurlatakes','Susjurlata Jasmil','Sejursartakes','Sejursarta Psikologi','Sejursarta Jasmil','Sejursarta Farmasi','Diklatjur PNS Gol. II Kes']
const dikkualsus = ['Susdokbangan','Suswatbangan','Suskesbangan','Suspa Tester Psikologi','Suspa Apoteker','Suspa Binjas','Sus OPA','Susba Tester Psikologi','Suster Keswa','Suskeslap Pasgat']
export const educationPrograms = [...kejuruan.map((name, i) => ({ id: `k-${i + 1}`, name, category: 'Kejuruan' })), ...dikkualsus.map((name, i) => ({ id: `d-${i + 1}`, name, category: 'Dikkualsus' }))].map((p, i) => ({ ...p, materials: 6 + i % 4, videos: 4 + i % 3, simulations: 2 + i % 2, progress: 20 + (i * 7) % 80, description: `Program ${p.name} untuk penguatan kompetensi kesehatan militer, kedinasan, dan dukungan operasi.` }))

export const programModules = ['Panduan', 'Materi', 'Video', 'Simulasi', 'Soal Ujian', 'Kotak Pengumpulan Tugas/Ujian', 'Progress Peserta']

export const assignments = [
  { id: 'A1', title: 'Tugas Resume Materi BLS', description: 'Buat ringkasan materi inti BLS.', dueInDays: 7, status: 'Belum dikerjakan' },
  { id: 'A2', title: 'Tugas Analisis Kasus Pasien Tidak Sadar', description: 'Analisis langkah penanganan kasus.', dueInDays: 10, status: 'Dikumpulkan' },
  { id: 'A3', title: 'Tugas Laporan Praktik BLS', description: 'Susun laporan praktik BLS lapangan.', dueInDays: 14, status: 'Dinilai' },
]

export const quizQuestions = [
  { id:1, q:'Apa langkah pertama sebelum menolong korban?', options:['Memberikan minum','Memastikan keamanan penolong dan pasien','Langsung melakukan kompresi','Memindahkan korban'], answer:1 },
  { id:2, q:'Apa arti A dalam AVPU?', options:['Action','Alert','Airway','Assistance'], answer:1 },
  { id:3, q:'Kapan penolong harus meminta bantuan?', options:['Setelah korban sadar','Setelah selesai semua tindakan','Setelah mengecek respons dan menemukan kondisi darurat','Tidak perlu meminta bantuan'], answer:2 },
  { id:4, q:'Apa yang diperiksa pada tahap Breathing?', options:['Warna pakaian','Napas korban','Identitas korban','Suhu ruangan'], answer:1 },
  { id:5, q:'Apa tujuan utama BLS?', options:['Memberikan pertolongan dasar untuk mempertahankan kehidupan','Memberikan obat','Membuat laporan','Mengganti perawatan rumah sakit'], answer:0 },
]

export const dummyUsers = [{ username:'peserta01', role:'Peserta' }, { username:'instruktur01', role:'Instruktur' }, { username:'admin01', role:'Admin' }]
export const dummyStats = { totalUsers: 120, totalPrograms: educationPrograms.length }
export const initialForumPosts = [{ id: crypto.randomUUID(), author:'Instruktur BLS', title:'Diskusi awal: alur AVPU', category:'BLS', content:'Silakan berbagi pengalaman penerapan AVPU di lapangan.', comments:[], createdAt:new Date().toISOString() }]
