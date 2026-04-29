import { Link } from 'react-router-dom';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import {
  assignments,
  fashMaterials,
  educationPrograms,
  fashVideos,
  dummyUsers,
} from '../data/dummyData';
import { getStorage, storageKeys } from '../utils/localStorage';

function ParticipantDashboard({ done, progress, quizResults }) {
  const statItems = [
    { title: 'Diklat yang didaftar', value: 11, tone: 'green' },
    { title: 'Pesan dukungan', value: 0, tone: 'pink' },
    { title: 'Komentar', value: 0, tone: 'blue' },
  ];

  return (
    <div className='dashboard-shell'>
      <h2 className='dashboard-title'>Dashboard</h2>

      <section className='dashboard-stat-grid'>
        {statItems.map((item) => (
          <article key={item.title} className={`dashboard-stat-card ${item.tone}`}>
            <div className='dashboard-stat-icon'>◉</div>
            <div>
              <h3>{item.value}</h3>
              <p>{item.title}</p>
            </div>
          </article>
        ))}
      </section>

      <section className='dashboard-welcome card'>
        <div>
          <h3>Hi M.,</h3>
          <p className='highlight'>Anda memiliki 1 event baru</p>
          <p>- New badge awarded</p>
          <p className='dashboard-linkline'>Lihat semua event</p>
        </div>
        <div className='dashboard-illustration' aria-hidden='true'>
          👨‍🏫
        </div>
      </section>

      <section className='grid'>
        <Card>
          <h3>Progress pembelajaran</h3>
          <ProgressBar value={progress} />
          <p>{progress}% selesai</p>
          <p>Materi selesai: {done}</p>
          <p>Riwayat kuis terakhir: {quizResults.at(-1)?.score ?? '-'}</p>
          <Link className='btn' to='/fash'>Lanjut ke FASH</Link>
        </Card>

        <Card>
          <h3>Papan Pengumuman</h3>
          <p className='highlight'>New Year Sales Festival</p>
          <p>Dibuat oleh Staff | 13 Jul 2021</p>
          <button className='btn ghost small'>Lihat Detil</button>
        </Card>
      </section>
    </div>
  );
}

export default function Dashboard() {
  const user = getStorage(storageKeys.currentUser, {
    role: 'Peserta',
    username: 'guest',
  });
  const materiProgress = getStorage(storageKeys.materiProgress, {});
  const submissionList = getStorage(storageKeys.assignmentSubmissions, []);
  const quizResults = getStorage(storageKeys.quizResults, []);
  const forumPosts = getStorage(storageKeys.forumPosts, []);

  const done = Object.values(materiProgress).filter(Boolean).length;
  const progress = Math.round((done / fashMaterials.length) * 100) || 0;

  if (user.role === 'Instruktur') {
    return (
      <div className='grid'>
        {[
          ['Jumlah peserta dummy', dummyUsers.length],
          ['Jumlah materi aktif', fashMaterials.length],
          ['Jumlah tugas terkumpul', submissionList.length],
          ['Jumlah forum diskusi', forumPosts.length],
          [
            'Rata-rata nilai kuis dummy',
            quizResults.length
              ? Math.round(
                  quizResults.reduce((accumulator, item) => accumulator + item.score, 0) /
                    quizResults.length,
                )
              : 0,
          ],
        ].map(([title, value]) => (
          <Card key={title}>
            <h3>{title}</h3>
            <p>{value}</p>
          </Card>
        ))}
        <Card className='span2'>
          <h3>Submission Tugas Terbaru</h3>
          <table>
            <tbody>
              {submissionList.slice(-5).map((submission) => (
                <tr key={submission.id}>
                  <td>{submission.studentName}</td>
                  <td>{submission.assignmentTitle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    );
  }

  if (user.role === 'Admin') {
    return (
      <div className='grid'>
        {[
          ['Jumlah user dummy', dummyUsers.length],
          ['Jumlah program pendidikan', educationPrograms.length],
          ['Jumlah materi', fashMaterials.length],
          ['Jumlah video', fashVideos.length],
          ['Jumlah tugas', assignments.length],
          ['Jumlah kuis', 1],
          [
            'Jumlah data localStorage',
            Object.keys(localStorage).filter((key) => key.startsWith('fash_')).length,
          ],
        ].map(([title, value]) => (
          <Card key={title}>
            <h3>{title}</h3>
            <p>{value}</p>
          </Card>
        ))}
        <Link className='btn' to='/admin'>
          Ke Admin LocalStorage
        </Link>
      </div>
    );
  }

  return <ParticipantDashboard done={done} progress={progress} quizResults={quizResults} />;
}
