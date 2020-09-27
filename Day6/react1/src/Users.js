import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users(){
    const [ users, setUsers ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    
    
    const fetchUsers = async () => {
        try{    //비동기로 멈춰서 반드시 응답시에 실행해야 하는 get으로 받는 URL 호출
            setError(null);
            setUsers(null);
            setLoading(true);

            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users/'  
            );
            setUsers(response.data);
        }catch(e){
            setError(e);
        }
        setLoading(false);
    };

    useEffect( () => {
        fetchUsers();
    }, []);

    if(loading) return <div>로딩중 ...</div>
    if(error) return <div>에러가 발생했습니다...</div>
    if(!Users) return null;

    return(
        <>
        <ul>
            {users.map(user => (
                <li key ={user.id}>
                    {user.username} ({user.name})
                </li>
            ))};

        </ul>
        <button onClick={fetchUsers}>다시 불러오기</button>
        </>
    )

}

export default Users;