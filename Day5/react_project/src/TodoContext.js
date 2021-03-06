import React, { createContext, useContext, useReducer, useRef } from 'react';

const initialTodos = [
    {
        id: 1,
        text: '일찍 일어나기',
        done: true
    },
    {
        id: 2,
        text: '아침밥 챙겨먹기',
        done: false
    },
    {
        id: 3,
        text: '명상하기',
        done: false
    },
    {
        id: 4,
        text: '세차하기',
        done: false
    },
    {
        id: 5,
        text: '일기쓰기',
        done: false
    },
    {
        id: 6,
        text: '일찍 잠들기',
        done: false
    },
];

function todoReducer(state, action){
    switch (action.type){
        case 'CREATE' :
            return state.concat(action.todo);
        case 'T0GGLE' :
            return state.map(todo => 
                todo.id === action.id ? {...todo, done: !todo.done} : todo);
        case 'REMOVE' :
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`${action.type}`);
    };   
}

const TodoStateContext = createContext();       // 값 전달
const TodoDispatchContext = createContext();    // 액션 전달
const TodoNextIdContext = createContext();

export function TodoProvider({ children }){
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    //const [값, 액션함수] 리듀서 사용
    const nextId = useRef(7);
    return (
        
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    ) 
}

export function useTodoState(){
    return useContext(TodoStateContext);
}

export function useTodoDispatch(){
    return useContext(TodoDispatchContext);
}

export function useTodoNextId(){
    return useContext(TodoNextIdContext);
}
