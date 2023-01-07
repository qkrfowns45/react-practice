//디자인을 만들때는 app()안에 만들면 안된다. 정적파일이기때문에

import styled from 'styled-components';
import './App.css';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <div>
      <Title>안녕</Title>
      <div>헬로</div>
    </div>
  );
}

export default App;
