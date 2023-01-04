import React, { useEffect, useState } from 'react';
import Home from '../components/home/Home';

const HomePage = () => {
  //http 요청(jquery ajax,fetch,axios(다운)) 넘기려면 무조건 상태데이터!
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState([]);
  //빈 배열이면 한번만 실행
  useEffect(() => {
    //다운로드 가정
    let datas = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 1, title: '제목2', content: '내용2' },
      { id: 1, title: '제목3', content: '내용3' },
    ];

    //빈데이터가 들어감!
    setBoards([...datas]);
    setUser({ id: 1, username: 'newbie' });
  }, []);

  return <Home boards={boards} setBoards={setBoards} user={user} />;
};

export default HomePage;
