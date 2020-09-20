import React, { useRef } from 'react';
import MemberList from './MemberList';

function App() {

  const members = [
    {
        id: 1,
        userid: 'apple',
        name: '김사과',
        gender: '여자'
    },
    {
        id: 2,
        userid: 'banana',
        name: '반하나',
        gender: '여자'
    },
    {
        id: 3,
        userid: 'orange',
        name: '오렌지',
        gender: '남자'
    },
    {
        id: 4,
        userid: 'melon',
        name: '이메론',
        gender: '남자'
    },
    {
        id: 5,
        userid: 'water',
        name: '이수',
        gender: '남자'
    }
  ];

  const nextId = useRef(6);

  const onCreate = () => {
    // 배열의 항목 추가 하는 코드
    // ...
    nextId.current += 1;
  }
  return <MemberList members={members}/>
}

export default App;
