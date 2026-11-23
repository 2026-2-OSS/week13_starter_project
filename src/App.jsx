import Header from './components/Header.jsx';
import StatCard from './components/StatCard.jsx';
import UserList from './components/UserList.jsx';
import WeatherPlaceholder from './components/WeatherPlaceholder.jsx';
import { sampleUsers } from './data/users.js';

export default function App() {
  return (
    <div className="app-shell">
      <Header title="Open Source Studio" subtitle="Week 13 · React Mini Dashboard" />
      <main className="dashboard">
        <section className="hero">
          <p className="hero-kicker">오픈소스 스튜디오 / 13주차</p>
          <h1>Build. Analyze. Deploy. Connect.</h1>
          <p>
            동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세
          </p>
          <span className="hero-tag">이번 실습은 제출 없이 수업 중에만 만듭니다</span>
        </section>

        <section className="stats-grid" aria-label="Dashboard summary">
          <StatCard icon="👥" label="Sample Users" value={sampleUsers.length} detail="Local JavaScript array" />
          <StatCard icon="⚙️" label="React Hooks" value="useState" detail="Search + useRef focus" />
          <StatCard icon="🌐" label="REST API" value="LAB 5–7" detail="Axios integration coming next" />
        </section>

        <div className="content-grid">
          <UserList initialUsers={sampleUsers} />
          <WeatherPlaceholder />
        </div>
        <div className="mini-section">
          <strong>Learning path: GitHub → Install → Analyze → Deploy → Axios → API UI → Weather</strong>
          <span>LAB results are not submitted. Apply the skills to your own team project.</span>
        </div>
      </main>
    </div>
  );
}
