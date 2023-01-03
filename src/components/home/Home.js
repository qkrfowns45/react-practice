import React from 'react';

//Function방식
const Home = (props) => {
  //   const boards = props.boards;
  //   const id = props.id;

  //구조분할 할당. 이름은 무조건 같아야한다
  const { boards } = props;
  const { setBoards } = props;
  return (
    <div>
      <h1>여기는 홈페이지 입니다.</h1>
      <button onClick={() => setBoards([])}>전체삭제</button>
      {boards.map((board) => (
        <h3>
          제목 : {board.title} 내용: {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
