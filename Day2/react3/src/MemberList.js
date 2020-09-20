import React from 'react';

function Member( { member } ){
    return(
        <div>
            <b>{member.userid}</b> <b>{member.name}</b> <span>{member.gender}</span>
        </div>
    );
}

function MemberList( { members }){
    return (
        <div>
            { members.map((member) => (
                <Member member={member} key={member.id} />
            ))}
        </div>
    )
}

export default MemberList;