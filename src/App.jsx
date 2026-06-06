import { useState } from 'react';

function App() {
  // 1. 기본값이 0인 전광판 상자 세트 만들기
  const [number, setNumber] = useState(0);
  <h1>Go React!</h1>
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* 2. 전광판 화면에 띄우기 */}
      <h1 style={{ fontSize: '40px' }}>{number}</h1>

      {/* 3. 1 더하기 버튼 */}
      <button 
        onClick={() => setNumber(number + 1)} 
        style={{ padding: '10px 20px', fontSize: '18px', marginRight: '10px' }}
      >
        1 더하기
      </button>

      {/* 4. 방금 직접 만드신 멋진 1 빼기 버튼! */}
      <button 
        onClick={() => setNumber(number - 1)} 
        style={{ padding: '10px 30px', fontSize: '18px' }}
      >
        1 빼기
      </button>
    </div>
  );
}

export default App;