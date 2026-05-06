# E-Learning FASH Skadik 504 Wingdik 500/Umum

Prototype React + Vite untuk platform LMS internal FASH Skadik 504 yang bernuansa pendidikan militer-kesehatan.

## Fokus Desain
- Landing page LMS formal dengan hero, profil Skadik 504, statistik, fitur, preview dashboard, program pendidikan, login, dan footer/identitas.
- Menu utama: Home, Profil Skadik 504, Dashboard, AEROFORCE-BLS, Pendidikan, dan Login / Masuk Dashboard.
- Nuansa biru navy, biru muda, putih, dan abu muda dengan tampilan responsif desktop/mobile.

## Fitur LMS
Home, Login/Register dummy, Dashboard role-based, AEROFORCE-BLS (panduan, materi, video, simulasi BLS, forum, tugas, kuis), Pendidikan + detail program, Forum, Tugas, Kuis berbasis timer, rekap nilai/progress, dan Admin localStorage.

## Tech Stack
React, Vite, React Router DOM, CSS modern, localStorage, dummy data statis.

## Menjalankan Lokal
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy Vercel
1. Push repo ke GitHub.
2. Import ke Vercel (preset Vite).
3. Build: `npm run build`.
4. Output: `dist`.
5. `vercel.json` sudah disiapkan untuk rewrite SPA.

## Routes
`/`, `/profil`, `/login`, `/dashboard`, `/aeroforce-bls`, `/fash` (redirect), `/pendidikan`, `/pendidikan/:id`, `/forum`, `/tugas`, `/kuis`, `/admin`.

## LocalStorage Keys
`fash_current_user`, `fash_materi_progress`, `fash_video_progress`, `fash_simulation_results`, `fash_forum_posts`, `fash_assignment_submissions`, `fash_quiz_results`, `fash_admin_logs`.
