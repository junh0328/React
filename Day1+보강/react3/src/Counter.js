import React, { useState } from 'react';

function Counter(){

    const [number, setNumber] = useState(0);
    
    const onIncrease = () => {
        //console.log('1 더하기!');
        //setNumber(number + 1);
        setNumber(prevNumber => prevNumber + 1);    // 함수형 업데이트
    }

    const onDecrease = () => {
        //console.log('1 빼기!');
        //setNumber(number - 1);
        setNumber(prevNumber => prevNumber - 1);
    }

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={onIncrease}>1더하기</button>
            <button onClick={onDecrease}>1빼기</button>
        </div>
    );
}

export default Counter;