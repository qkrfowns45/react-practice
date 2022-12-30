import logo from './logo.svg';
import './App.css';

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

let a = 10; //변수
const b = 20; //상수

function App() {
  let c;
  console.log(1, c);

  const mystyle = {
    color: 'red',
  };
  let list = [1, 2, 3, 4];

  return (
    <div>
      <div style={mystyle}>
        안녕 {a === 10 ? '10입니다.' : '10이 아닙니다.'}
      </div>
      <h1 className="box-style">안녕1ssssdsa {b === 10 && '20입니다.'}</h1>
      <hr />
      <div>
        {list.map((n) => (
          <h1>{n}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
