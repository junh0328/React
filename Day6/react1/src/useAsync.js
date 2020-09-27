/*
    API를 요청할 때마다 계속 불러오는 것을 방지시키기 위해
*/

import { useReducer, useEffect } from 'react';

function reducer(state, action){
    switch(action.type){
        case 'LOADING':
            return{
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return{
                loading: false,
                data: action.data,  //action에 들어오는 데이터를 안에 넣어준다.
                error: null
            };
        case 'ERROR':
            return{
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`type: ${action.type}`);

    }
}

function useAsync(callback, deps = [], skip = false){
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });
    
    const fetchData = async () => {
        dispatch({type: 'LOADING'});
        try{
            const data = await callback();
            dispatch({ type: 'SUCCESS', data});
        }catch(e){
            dispatch({ type: 'ERROR', error:e});
        }
    };

    useEffect(() => {
        if(skip) return;
        fetchData();
    }, deps);

    return [state, fetchData];
}

export default useAsync;