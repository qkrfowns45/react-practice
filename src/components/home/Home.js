import React from 'react';
import styled from 'styled-components';

//Function방식
//부모로부터 받아온 데이터를 동적할당

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'newbie' ? 'blue' : 'red')};
`;

const StyledAddButton = styled(StyledDeleteButton)`
  color: ${(props) => (props.user.username === 'newbie' ? 'blue' : 'red')};
  background-color: green;
`;

const Home = (props) => {
  //   const boards = props.boards;
  //   const id = props.id;

  //구조분할 할당. 이름은 무조건 같아야한다
  const { boards, setBoards, user } = props;

  return (
    <div>
      <h1>여기는 홈페이지 입니다.</h1>
      <StyledAddButton user={user}>더하기</StyledAddButton>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3>
          제목 : {board.title} 내용: {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
