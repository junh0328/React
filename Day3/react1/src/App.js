import React, { useRef, useState, useMemo } from 'react';
import MemberList from './MemberList';
import CreateMember from './CreateMember';

function countActiveMembers(members){
  console.log('선택된 사용자 수는 ... ');
  return members.filter(member => member.active).length;
}



function App() {

  const [inputs, setInputs] = useState({
      userid: '',
      name: '',
      gender: ''
  });

  const { userid, name, gender } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
        ...inputs,
        [name]: value
    });
  };

  const [members, setMembers] = useState([
    {
        id: 1,
        userid: 'apple',
        name: '김사과',
        gender: '여자',
        active: true
    },
    {
        id: 2,
        userid: 'banana',
        name: '반하나',
        gender: '여자',
        active: false
    },
    {
        id: 3,
        userid: 'orange',
        name: '오렌지',
        gender: '남자',
        active: false
    },
    {
        id: 4,
        userid: 'melon',
        name: '이메론',
        gender: '남자',
        active: false
    },
    {
        id: 5,
        userid: 'water',
        name: '이수',
        gender: '남자',
        active: false
    }
  ]);

  const nextId = useRef(6);

  const onCreate = () => {

    const member = {
      id: nextId.current,
      userid,
      name,
      gender
    };
    setMembers([...members, member]);

    setInputs({
      userid: '',
      name: '',
      gender: ''
    });  
    nextId.current += 1;
  };

  const onRemove = id => {
    setMembers(members.filter(member => member.id !== id));
  };

  const onToggle = id => {
    setMembers(
      members.map(member => 
        member.id === id ? { ...member, active: !member.active} : member)
    );
  };

  const count = useMemo(() => countActiveMembers(members), [members]);

  return (
    <>
      <CreateMember
        userid={userid} 
        name={name} 
        gender={gender} 
        onChange={onChange} 
        onCreate={onCreate} 
      />
      <MemberList members={members} onRemove={onRemove} onToggle={onToggle}/>
      <div>선택된 사용자 : {count} 명</div>
    </>
  )
}

export default App;
