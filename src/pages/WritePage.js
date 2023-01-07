import React from 'react';

const WritePage = () => {
  const handleWrite = () => {
    //ListPage의 setPosts에 데이터를 담아야함
    let post = { id: 6, title: 'test정보' };
  };

  return (
    <div>
      <h1>write페이지 입니다.</h1>
      <hr />
      <form>
        <input type="text" placeholder="제목을 입력하세요..." />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
    </div>
  );
};

export default WritePage;
