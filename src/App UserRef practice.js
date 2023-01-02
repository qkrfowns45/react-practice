//useRef(디자인) dom을 변경할 때 사용

import { createRef, useRef, useState } from 'react';

function App() {
  const myRef = useRef(null);

  const [list, setList] = useState([
    { id: 1, name: 'newbietop' },
    { id: 2, name: 'newbietop2' },
  ]);

  const myRefs = Array.from({ length: list.length }).map(() => createRef());

  return (
    <div>
      <button
        onClick={() => {
          myRef.current.style.backgroundColor = 'red';

          myRefs[0].current.style.backgroundColor = 'red';
        }}
      >
        색변경
      </button>
      <div ref={myRef}>박스</div>
      {list.map((user, index) => (
        <h1 ref={myRefs[index]}>{user.name}</h1>
      ))}
    </div>
  );
}

export default App;
