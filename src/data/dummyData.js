export const stats = [
  ['26', 'Program Pendidikan', 'Kejuruan dan Dikkualsus'],
  ['18', 'Materi FASH', 'BLS dan kesehatan penerbangan'],
  ['12', 'Video Praktik', 'Demonstrasi keterampilan klinis'],
  ['2', 'Mode Simulasi BLS', 'Satu dan dua penolong'],
]

export const announcements = [
  'Jadwal pembelajaran FASH dimulai setiap Senin pukul 08.00 WIB.',
  'AEROFORCE-BLS digunakan sebagai aplikasi pembelajaran dan pendukung penelitian tesis S2 Keperawatan Unsoed.',
  'Pengumpulan tugas praktik maksimal H+7 setelah materi selesai.',
  'Ujian berbasis waktu dilaksanakan pada akhir sesi modul.',
]

export const features = [
  { icon: '📚', title: 'Materi Pembelajaran', description: 'Modul FASH, Basic Life Support, dan kesehatan penerbangan tersusun bertahap.' },
  { icon: '🎥', title: 'Video Praktik BLS', description: 'Video demonstrasi tindakan BLS, RJP, ambubag, dan penanganan kegawatdaruratan.' },
  { icon: '🫀', title: 'Simulasi Interaktif', description: 'Alur simulasi D-R-C-B dengan mode satu dan dua penolong.' },
  { icon: '💬', title: 'Forum Diskusi', description: 'Ruang tanya jawab peserta, dosen, instruktur, dan kelompok belajar.' },
  { icon: '📝', title: 'Tugas / Assignment', description: 'Unduh instruksi, unggah jawaban, pantau status, nilai, dan feedback.' },
  { icon: '⏱️', title: 'Kuis / Ujian', description: 'Tes berbasis waktu dengan skor, kelulusan, dan umpan balik pembelajaran.' },
]

export const dashboardCards = [
  { icon: '📈', title: 'Ringkasan Progress Belajar', value: '68%', description: 'Kemajuan modul aktif' },
  { icon: '🎓', title: 'Program yang Sedang Diikuti', value: '3', description: 'FASH, BLS, Kesehatan Penerbangan' },
  { icon: '📖', title: 'Materi Terakhir Dibuka', value: 'AVPU', description: 'Pemeriksaan respons korban' },
  { icon: '📝', title: 'Tugas Aktif', value: '2', description: 'Menunggu pengumpulan' },
  { icon: '⏱️', title: 'Kuis Aktif', value: '1', description: 'Durasi 5 menit' },
  { icon: '💬', title: 'Forum Terbaru', value: '5', description: 'Diskusi klinis aktif' },
  { icon: '🏅', title: 'Sertifikat / Hasil Belajar', value: '2', description: 'Rekap nilai tersimpan' },
  { icon: '📅', title: 'Kalender Kegiatan', value: '4', description: 'Agenda pekan ini' },
  { icon: '🔔', title: 'Notifikasi', value: '7', description: 'Informasi akademik' },
]

export const roleMenus = {
  Admin: ['Kelola user', 'Kelola program', 'Kelola materi', 'Kelola tugas', 'Kelola kuis', 'Kelola forum', 'Laporan progress peserta'],
  Peserta: ['Lihat program', 'Buka materi', 'Tonton video', 'Ikuti simulasi', 'Kerjakan tugas', 'Kerjakan kuis', 'Lihat nilai/progress'],
  Instruktur: ['Upload materi', 'Upload video', 'Buat tugas', 'Buat kuis', 'Cek jawaban peserta', 'Beri nilai dan feedback'],
}

export const fashMaterials = [
  'Pengantar Basic Life Support',
  'Keselamatan Penolong dan Pasien',
  'Pemeriksaan Dangerous',
  'Pemeriksaan Respons AVPU',
  'Teknik Meminta Bantuan',
  'Circulation dan Indikator SpO2 <95%',
  'Breathing: Lihat, Dengar, Rasa',
  'Kesehatan Penerbangan pada Kondisi Darurat',
].map((title, i) => ({ id: `M${i + 1}`, title, description: `Materi ${title} untuk konteks FASH dan pendidikan kesehatan militer.`, duration: `${15 + i * 3} menit`, level: i < 3 ? 'Dasar' : 'Menengah', status: 'Belum Mulai' }))

export const fashVideos = [
  'Praktik Pemeriksaan Keamanan Lokasi',
  'Praktik Cek Respons AVPU',
  'Praktik Meminta Bantuan',
  'Praktik Pemeriksaan SpO2 dan Sirkulasi',
  'Praktik RJP Satu Penolong',
  'Praktik RJP Dua Penolong dengan Ambubag',
].map((title, i) => ({ id: `V${i + 1}`, title, description: `Video demonstrasi ${title}`, duration: `${8 + i} menit` }))

export const blsSimulationSteps = [
  { key: 'D', title: 'Dangerous', description: 'Memastikan penolong, pasien, dan lingkungan aman sebelum tindakan.' },
  { key: 'R', title: 'Respons', description: 'Cek kesadaran dengan AVPU: Alert, Verbal, Pain, Unresponsive.' },
  { key: 'M', title: 'Minta Tolong', description: 'Aktifkan bantuan, panggil tim, dan siapkan alat emergensi.' },
  { key: 'C', title: 'Circulation', description: 'Cek sirkulasi darah, nadi, perfusi, dan indikator SpO2 <95%.' },
  { key: 'B', title: 'Breathing', description: 'Lihat, dengar, dan rasa usaha napas korban secara cepat.' },
]

export const simulationModes = [
  { title: 'Satu Penolong', focus: 'Fokus pada RJP berkualitas, kompresi dada, dan aktivasi bantuan.' },
  { title: 'Dua Penolong', focus: 'Satu personel melakukan RJP, satu personel mengelola jalan napas dan ambubag.' },
]

const kejuruan = ['Sesarcabkes', 'Sejurbakes Khusus', 'Sejurbakes', 'Sejurba Psikologi', 'Sejurba Jasmil', 'Sejurba Farmasi', 'Susbamenjurkes', 'Susbamenjur Psikologi', 'Susbamenjur Jasmil', 'Susjurlatakes', 'Susjurlata Jasmil', 'Sejursartakes', 'Sejursarta Psikologi', 'Sejursarta Jasmil', 'Sejursarta Farmasi', 'Diklatjur PNS Gol. II Kes']
const dikkualsus = ['Susdokbangan', 'Suswatbangan', 'Suskesbangan', 'Suspa Tester Psikologi', 'Suspa Apoteker', 'Suspa Binjas', 'Sus OPA', 'Susba Tester Psikologi', 'Suster Keswa', 'Suskeslap Pasgat']

export const programModules = ['Panduan', 'Materi', 'Video', 'Simulasi', 'Soal Ujian', 'Kotak Pengumpulan Tugas/Ujian', 'Progress Peserta']
export const educationPrograms = [...kejuruan.map((name, i) => ({ id: `k-${i + 1}`, name, category: 'Kejuruan' })), ...dikkualsus.map((name, i) => ({ id: `d-${i + 1}`, name, category: 'Dikkualsus' }))].map((p, i) => ({ ...p, materials: 6 + i % 4, videos: 4 + i % 3, simulations: 2 + i % 2, progress: 20 + (i * 7) % 80, description: `Program ${p.name} untuk penguatan kompetensi kesehatan militer, kesehatan penerbangan, dan kesiapan tugas satuan.` }))

export const assignments = [
  { id: 'A1', title: 'Tugas Resume Materi BLS', description: 'Buat ringkasan materi inti BLS.', dueInDays: 7, status: 'Belum dikerjakan' },
  { id: 'A2', title: 'Tugas Analisis Kasus Pasien Tidak Sadar', description: 'Analisis langkah penanganan kasus.', dueInDays: 10, status: 'Dikumpulkan' },
  { id: 'A3', title: 'Tugas Laporan Praktik BLS', description: 'Susun laporan praktik BLS lapangan.', dueInDays: 14, status: 'Dinilai' },
]

export const quizQuestions = [
  { id: 1, q: 'Apa langkah pertama sebelum menolong korban?', options: ['Memberikan minum', 'Memastikan keamanan penolong dan pasien', 'Langsung melakukan kompresi', 'Memindahkan korban'], answer: 1 },
  { id: 2, q: 'Apa arti A dalam AVPU?', options: ['Action', 'Alert', 'Airway', 'Assistance'], answer: 1 },
  { id: 3, q: 'Kapan penolong harus meminta bantuan?', options: ['Setelah korban sadar', 'Setelah selesai semua tindakan', 'Setelah mengecek respons dan menemukan kondisi darurat', 'Tidak perlu meminta bantuan'], answer: 2 },
  { id: 4, q: 'Apa yang diperiksa pada tahap Breathing?', options: ['Warna pakaian', 'Napas korban', 'Identitas korban', 'Suhu ruangan'], answer: 1 },
  { id: 5, q: 'Apa tujuan utama BLS?', options: ['Memberikan pertolongan dasar untuk mempertahankan kehidupan', 'Memberikan obat', 'Membuat laporan', 'Mengganti perawatan rumah sakit'], answer: 0 },
]

export const dummyUsers = [{ username: 'peserta01', role: 'Peserta' }, { username: 'instruktur01', role: 'Instruktur' }, { username: 'admin01', role: 'Admin' }]
export const dummyStats = { totalUsers: 120, totalPrograms: educationPrograms.length }
export const initialForumPosts = [{ id: crypto.randomUUID(), author: 'Instruktur BLS', title: 'Diskusi awal: alur AVPU', category: 'BLS', content: 'Silakan berbagi pengalaman penerapan AVPU di lapangan.', comments: [], createdAt: new Date().toISOString() }]
