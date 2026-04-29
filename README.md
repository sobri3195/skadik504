# E-Learning FASH Skadik 504
Prototype React + Vite untuk pembelajaran FASH, BLS, dan pendidikan Skadik 504 berbasis localStorage.

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
1. Push repo ke GitHub
2. Import ke Vercel (preset Vite)
3. Build: `npm run build`
4. Output: `dist`
5. `vercel.json` sudah disiapkan untuk rewrite SPA

## Fitur
Home, Login, Dashboard role-based, FASH (materi/video/simulasi), Pendidikan + detail, Forum + komentar, Tugas + submission, Kuis + timer + hasil, Admin localStorage.

## Routes
`/`, `/login`, `/dashboard`, `/fash`, `/pendidikan`, `/pendidikan/:id`, `/forum`, `/tugas`, `/kuis`, `/admin`

## LocalStorage Keys
`fash_current_user`, `fash_materi_progress`, `fash_video_progress`, `fash_simulation_results`, `fash_forum_posts`, `fash_assignment_submissions`, `fash_quiz_results`, `fash_admin_logs`

## Testing submit localStorage
Login, submit tiap form, refresh browser, cek data tetap tampil. Gunakan halaman `/admin` untuk reset dan inspeksi JSON.
