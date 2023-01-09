//글쓰기, 글삭제, 글목록보기
import './App.css';
import Top from './components/Top';
import Bottom from './components/Bottom';

function App() {
  return (
    <div className="container">
      <h1>최상단화면</h1>
      <Top />
      <Bottom />
    </div>
  );
}

export default App;
