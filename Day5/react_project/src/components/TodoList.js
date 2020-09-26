/*
    TodoList.js
    여러개의 할 일 항목을 보여줄 리스트
*/

import React from 'react';
import styled from 'styled-components';
import TodoItems from './TodoItems';
import { useTodoState } from '../TodoContext'; 

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList(){
    const todos = useTodoState();
    return(
        <TodoListBlock>
            {todos.map(todo => (
                <TodoItems 
                    key={todo.id} 
                    id={todo.id} 
                    text={todo.text}
                    done={todo.done}
                />
            ))}
        </TodoListBlock>
    )
}

export default TodoList;