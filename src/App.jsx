import { useState } from 'react'; // 1. 상태 바구니 꺼내오기

function App() {
  // 2. [숫자 담긴 바구니, 숫자를 바꿀 때 쓰는 함수] = useState(처음 시작할 숫자)
  const [number, setNumber] = useState(0); 

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🔢 나의 첫 리액트 카운터</h1>
      
      {/* 3. 화면에 바구니 안에 있는 숫자를 보여주기 */}
      <h2 style={{ fontSize: '40px' }}>{number}</h2>
      
      {/* 4. 버튼을 누르면(onClick), setNumber 함수를 써서 숫자를 +1 하기 */}
      <button onClick={() => setNumber(number + 1)} style={{ padding: '10px 20px', fontSize: '18px' }}>
        1 더하기
      </button>
    </div>
  );
}

export default App;