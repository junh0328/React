import React, {useEffect} from 'react';

function Member( { member, onRemove, onToggle } ){

    // useEffect(() => {
    //     // console.log('컴포넌트가 화면에 나타납니다.');
    //     console.log('member 값이 설정됨');
    //     console.log(member);
    //     return () => {
    //         // console.log('컴포넌트가 화면에서 사라집니다.');
    //         console.log('member가 바뀌기 전..');
    //         console.log(member);
    //     };
    // }, [member]);

    useEffect(() => {
        //console.log(member);
    });

    return(
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: member.active ? 'deeppink' : 'black'
                }}
                onClick={ () => onToggle(member.id) }>{member.userid}
            </b>
            <b>{member.name}</b>
            <span>{member.gender}</span> 
            <button onClick={() => onRemove(member.id)}>삭제</button>
        </div>
    );
}

function MemberList( { members, onRemove, onToggle }){
    return (
        <div>
            { members.map((member) => (
                <Member 
                member={member} 
                key={member.id} 
                onRemove={onRemove} 
                onToggle={onToggle}
                />
            ))}
        </div>
    )
}

export default MemberList;