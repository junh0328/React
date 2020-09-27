import React from 'react';

const profileData = {
  apple: {
    name: '김사과',
    description: '착해요'
  },
  banana: {
    name: '바나나',
    description: '잘먹어요'
  }
}

const Profile = ({match}) => {
  const {username} = match.params;
  const profile = profileData[username];

  if(!profile){
    return <div>존재하지 않는 유저입니다.</div>
  }
  return(
    <div>
      <h2>
        {username}({profile.name})
      </h2>
      <p>{profile.description}</p>
    </div>
  )
}

export default Profile;