import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sub from './Sub';

//0.React엔진 -데이터변경감지에서 UI그려주는 엔진
//1.실행과정(index.html) - spa(싱글 페이지 애플리케이션) a태크 못적음!
//2.JSX 문법
//3. 바벨(자바스크립트 ES5) -> ES6 함수형으로 가능!

//(1) return시에 하나의 dom만 리턴할 수 있다.
//(2) 변수선언은 let 혹은 const로만 해야함.
//(3) if사용 불가능x -> 삼항연산자 가능(조건 ? 값(true) : 값(false))
//(4) 조건부 렌더링(조건 && 값(true))
//(5) css디자인
// - 내부에 적는 방법
// - 외부 파일에 적는 방법(추천)
// - 라이브러리 사용(부트스트랩, component-styled)

// let a = 10; //변수
// const b = 20; //상수

function App() {
  // let c;
  // console.log(1, c);

  // const mystyle = {
  //   color: 'red',
  // };
  // let list = [1, 2, 3, 4];

  // let number = 1; //상태 값
  // const [number, setNumber] = useState(2); //React안에 hooks 라이브러리 상태값이 됨.
  // const add = () => {
  //   setNumber(number + 1); //react한테 number값 변경하라고 요청
  //   console.log('number', number);
  // };

  console.log('App 실행됨!!!');
  const [num, setNum] = useState(5);
  let sample = [
    {
      id: 1,
      name: '홍길동1',
    },
    {
      id: 2,
      name: '홍길동2',
    },
    {
      id: 3,
      name: '홍길동3',
    },
    {
      id: 4,
      name: '홍길동4',
    },
  ];
  const [users, setUsers] = useState(sample); //레퍼런스 변경되어야 동작한다.(깊은 복사를 해야한다!)

  const download = () => {
    // const a = sample.concat({
    //   id: 5,
    //   name: '홍길동5',
    // });
    setUsers([...sample, { id: num, name: '조자룡5' }]); //앞 sample은 불변이라 이렇게는 계속 변경이 어렵다.
    setNum(num + 1);
  };

  //랜더링 시점 = 상태값 변경
  return (
    <div>
      {/* <div style={mystyle}>
        안녕 {a === 10 ? '10입니다.' : '10이 아닙니다.'}
      </div>
      <h1 className="box-style">안녕1ssssdsa {b === 10 && '20입니다.'}</h1>
      <hr />
      <div>
        {list.map((n) => (
          <h1>{n}</h1>
        ))}
      </div> */}
      {/* <div>
        <h1>숫자 : {number}</h1>
        <button onClick={add}>더하기</button>
        <Sub />
      </div> */}
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id},{u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
