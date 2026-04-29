import { Link } from 'react-router-dom';
import { announcements, features } from '../data/dummyData';
import Card from '../components/Card';

export default function Home() {
  return (
    <div className='stack'>
      <section className='hero skadik-hero'>
        <div className='skadik-hero__logo' aria-hidden='true'>
          <div className='skadik-hero__logo-inner'>Skadik 504</div>
        </div>
        <div className='skadik-hero__content'>
          <h1>Aplikasi E-Learning FASH Skadik 504</h1>
          <p>
            Platform pembelajaran digital untuk FASH, BLS, dan program pendidikan
            Skadik 504.
          </p>
          <div>
            <Link className='btn' to='/dashboard'>
              Masuk Dashboard
            </Link>{' '}
            <Link className='btn ghost' to='/fash'>
              Mulai Belajar
            </Link>
          </div>
        </div>
      </section>

      <section>
        <Card>
          <h2>Profil Skadik 504</h2>
          <p>
            Skadik 504 mendukung pendidikan kesehatan militer secara modern,
            terstruktur, dan profesional.
          </p>
        </Card>
      </section>

      <section className='grid'>
        {features.map((f) => (
          <Card key={f}>
            <h3>{f}</h3>
          </Card>
        ))}
      </section>

      <section>
        <h2>Pengumuman</h2>
        <ul>
          {announcements.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
