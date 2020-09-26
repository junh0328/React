/*
    TodoHead.js >>>
    오늘의 날짜, 요일, 남은 할 일의 개수
*/

import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;

    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function TodoHead(){
    const todos = useTodoState();
    // console.log(todos); array: [ 0: 일찍 일어나기 , 1: .... ]
    const undoneTasks = todos.filter(todo => !todo.done);
    // todos 중 done 이 아닌 것만 undoneTasks의 변수로 들어간다.

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'});

    return (
        <TodoHeadBlock>
            <h1>{ dateString }</h1>
            <div className="day">{ dayName}</div>
            <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;
