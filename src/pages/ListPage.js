import React, { useState } from 'react';
import styled from 'styled-components';

const StyledBoxDix = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 20px;
  align-items: center;
`;

const ListPage = () => {
  const [posts, setPost] = useState([
    { id: 1, title: '내용1' },
    { id: 2, title: '내용2' },
    { id: 3, title: '내용3' },
    { id: 4, title: '내용4' },
    { id: 5, title: '내용5' },
  ]);

  return (
    <div>
      <h1>리스트페이지 입니다.</h1>
      <hr />
      {posts.map((post) => (
        <StyledBoxDix>
          번호 : {post.id} 제목 : {post.title}
          <div>
            <button>삭제</button>
          </div>
        </StyledBoxDix>
      ))}
    </div>
  );
};

export default ListPage;
