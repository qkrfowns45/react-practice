//useMemo => 메모라이제이션(기억)
//usestate로된 변수들이 상태가 바뀌면 같이 실행된다. 연산을 굳이 안해도되지만 중복을 막아줘야 좋은 코드가 됨
import { useMemo, useState } from 'react';

function App() {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState('합계');

  const getAddResult = () => {
    let sum = 0;
    list.forEach((i) => (sum = sum + i));
    console.log('sum 함수 실행됨 : ', sum);
    return sum;
  };

  const addResult = useMemo(() => getAddResult(), [list]); //getAddResult를 기억하고 있겠다라는 뜻

  return (
    <div>
      <button onClick={() => setStr('안녕')}>문자 변경</button>
      <button
        onClick={() => {
          setList([...list, 10]);
        }}
      >
        리스트값 추가
      </button>
      <div>
        {list.map((i) => (
          <h1>{i}</h1>
        ))}
      </div>
      <div>
        {str} : {addResult}
      </div>
    </div>
  );
}

export default App;
