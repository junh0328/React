import React, { useState, useRef } from 'react';

function Input2(){

    const [inputs, setInputs] = useState({
        userid: '',
        name: ''
    });

    const useridInput = useRef();


    const { userid, name } = inputs;    // 비구조화 할당

    const onChange = (e) => {
        const { value, name } = e.target;
        // console.log(`value : ${value}`);
        // console.log(`name : ${name}`);
        setInputs({
            ...inputs,  // spread 문법 inputs[name] = value; 
            [name]: value
        });
    };

    const onReset = () => {
        setInputs({
            userid: '',
            name: ''
        });
        useridInput.current.focus();
    };

    return (
        <div>
            아이디 : <input name="userid" placeholder="아이디를 입력하세요." onChange={onChange} value={userid} ref={useridInput}/><br/>
            이름 : <input name="name" placeholder="이름을 입력하세요." onChange={onChange} value={name}/><br/>
            <div>
                <button onClick={onReset}>초기화</button>
            </div>
            <div>
                <b>{name} ( {userid} )</b>
            </div>
        </div>
    );
}

export default Input2;

