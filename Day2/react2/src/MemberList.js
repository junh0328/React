import React from 'react';

function Member( {member} ){
    return (
        <div>
            <b>{member.userid}</b> <b>{member.name}</b> <span>{member.gender}</span>
        </div>
    );
}

function MemberList(){

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

    return (
        <div>
            {/* <Member member={members[0]}/>
            <Member member={members[1]}/>
            <Member member={members[2]}/>
            <Member member={members[3]}/>
            <Member member={members[4]}/> */}

            {/* { members.map((member, index) => (
                <Member member={member} key={index} />
            ))} */}

            { members.map((member) => (
                <Member member={member} key={member.id} />
            ))}

        </div>
    );
}

export default MemberList;
