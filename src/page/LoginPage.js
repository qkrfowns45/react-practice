import React from 'react';
import Login from '../components/login/Login';

const LoginPage = (props) => {
  console.log('LoginPage', props);
  return (
    <div>
      <button onClick={() => props.history.go(-1)}>원하는만큼 이동하기</button>
      <button onClick={() => props.history.goBack()}>
        하나만 뒤로 이동하기
      </button>
      <button onClick={() => props.history.push('/')}>
        원하는 장소로 이동하기
      </button>
      <Login />
    </div>
  );
};
export default LoginPage;
