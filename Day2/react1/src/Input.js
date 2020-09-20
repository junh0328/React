import React, { useState } from 'react';

function Input(){

    const [text, setText] = useState('');

    const onChange = (e) => {
        // console.log(e.target);
        // console.log(e.target.value);
        setText(e.target.value) // <input value="xxxx">
    } 

    const onReset = () => {
        setText('');
    }

    return (
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>입력된 값 : {text}</b>
            </div>
        </div>
    );
}

export default Input;
