import { useState } from 'react';

function App() {
  // 1. 현재 선택된 카테고리 상태 (기본값은 'PC방')
  const [category, setCategory] = useState('PC방');

  // 2. 서버(API)에서 받아왔다고 가정하는 역촌동 실시간 매장 데이터
  const storeData = {
    'PC방': [
      { name: '아크 PC방 역촌점', total: 120, jary: 15, price: '1시간 1,500원' },
      { name: '아이센스리그 PC방 역촌역점', total: 90, jary: 0, price: '1시간 1,600원' }
    ],
    '노래방': [
      { name: '씽스타 코인노래방 역촌점', total: 18, jary: 4, price: '1곡 500원 / 3곡 1,000원' },
      { name: '판타스틱 코인노래방 역촌역점', total: 12, jary: 1, price: '1곡 500원' }
    ]
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px', fontFamily: 'sans-serif', padding: '0 20px' }}>
      {/* 타이틀 */}
      <h1 style={{ color: '#333' }}>🚀 실시간 자리 Finder</h1>
      <p style={{ color: '#666' }}>헛걸음 방지! PC방/노래방 가기 전에 미리 확인하세요.</p>

      {/* 카테고리 선택 버튼들 */}
      <div style={{ marginTop: '20px', marginBottom: '30px' }}>
        <button 
          onClick={() => setCategory('PC방')}
          style={{ 
            padding: '12px 25px', 
            fontSize: '16px', 
            marginRight: '10px',
            backgroundColor: category === 'PC방' ? '#007BFF' : '#E0E0E0',
            color: category === 'PC방' ? 'white' : 'black',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          🎮 PC방 찾기
        </button>
        <button 
          onClick={() => setCategory('노래방')}
          style={{ 
            padding: '12px 25px', 
            fontSize: '16px', 
            backgroundColor: category === '노래방' ? '#FF2E93' : '#E0E0E0',
            color: category === '노래방' ? 'white' : 'black',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          🎤 노래방 찾기
        </button>
      </div>

      {/* 실시간 매장 리스트 (반응형 카드 형태) */}
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h2>📍 현재 주변 {category} 현황</h2>
        {storeData[category].map((store, index) => (
          <div key={index} style={{
            border: '1px solid #DDD',
            borderRadius: '12px',
            padding: '15px',
            marginBottom: '15px',
            textAlign: 'left',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ margin: '0 0 10px 0' }}>{store.name}</h3>
            <p style={{ margin: '5px 0', color: '#555' }}> 요금: <b>{store.price}</b></p>
            
            {/* 자리가 없으면 빨간색, 있으면 초록색 표시 */}
            <p style={{ 
              margin: '5px 0', 
              color: store.jary === 0 ? 'red' : 'green',
              fontWeight: 'bold'
            }}>
              {store.jary === 0 ? '❌ 현재 만석 (대기 필요)' : `🟢 빈 자리 있음: ${store.jary}석 남음 / 총 ${store.total}석`}
            </p>

            {/* PC방일 때만 미리 충전하기 버튼 보여주기 */}
            {category === 'PC방' && (
              <button 
                onClick={() => alert(`${store.name} 시간 충전 페이지로 이동합니다 (기능 준비 중!)`)}
                style={{
                  marginTop: '10px',
                  width: '100%',
                  padding: '8px',
                  backgroundColor: '#28A745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                ⚡ 폰으로 미리 시간 충전하기
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;