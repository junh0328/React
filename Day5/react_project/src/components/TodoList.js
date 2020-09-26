/*
    TodoList.js
    여러개의 할 일 항목을 보여줄 리스트
*/

import React from 'react';
import styled from 'styled-components';
import TodoItems from './TodoItems';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList(){
    return(
        <TodoListBlock>
            <TodoItems text="일찍 일어나기" done={true}/>
            <TodoItems text="아침밥 챙겨먹기" done={true}/>
            <TodoItems text="명상하기" done={true}/>
            <TodoItems text="새차하기" done={false}/>
            <TodoItems text="일기쓰기" done={false}/>
            <TodoItems text="일찍 잠들기" done={false}/>
        </TodoListBlock>
    )
}

export default TodoList;