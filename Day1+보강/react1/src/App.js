import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {

  const name = "김사과";
  const style = {
    color: 'white',
    backgroundColor: 'deeppink',
    fontSize: 30, // 기본 단위 px
    padding: '1em'  // 다른 단위를 사용하려면 문자열로 설정
  }

  return (
    <>
      {/*주석은 화면에 보이지 않습니다.*/}
      /* 만약 중괄호를 사용하지 않으면 화면에 노출됩니다. */
      <div className="blue-box">안녕하세요. 리액트</div>
      <div>안녕하세요. 리액트</div>
      <div>안녕하세요. 리액트</div>
      <Hello/>
      <div style={style}>안녕하세요. {name}님</div>
    </>
  )
}

export default App;
