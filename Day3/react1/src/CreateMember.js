import React from 'react';

function CreateMember({userid, name, gender, onChange, onCreate}){
    return (
        <div>
            <input
                name="userid" 
                placeholder="아이디를 입력하세요." 
                onChange={onChange}
                value={userid}
            />
            <input
                name="name" 
                placeholder="이름을 입력하세요." 
                onChange={onChange}
                value={name}
            /> 
            <input
                name="gender" 
                placeholder="성별을 입력하세요." 
                onChange={onChange}
                value={gender}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}


export default CreateMember;