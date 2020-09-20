import React from 'react';

// function Profile(props){
//     return (
//         <>
//             <div style={{color: props.color}}>안녕하세요. {props.name}님</div>
//             <div>성별 : {props.gender}</div>
//             <div>연락처 : {props.hp}</div>
//         </>
//     )
// }

// 비구조화 할당
function Profile({color, name, gender, hp, isSpecial}){
    return (
        <>
            <div style={{color}}>
                {/* { isSpecial ? <b> ★ </b> : null } */}
                { isSpecial && <b> ★ </b> }
                안녕하세요. {name}님</div>
            <div>성별 : {gender}</div>
            <div>연락처 : {hp}</div>
        </>
    )
}

Profile.defaultProps = {
    name: '무명',
    gender: '중성',
    hp: '없음'
}


export default Profile