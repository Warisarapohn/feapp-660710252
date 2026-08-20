import ProfileCard from './Components/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'พลอยไพลิน', nickname: 'หวา',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'แมว'] },
  
  { id: 2, name: 'ณัฐกฤตา', nickname: 'โอปอ',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['สีดำ', 'ตัวนาก'] },
  { id: 3, name: 'อนัดวา', nickname: 'วา',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['สีน้ำตาล', 'หมา'] },
  ];


function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;