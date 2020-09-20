import React from 'react';
import Profile from './Profile';
import Wrap from './Wrap';

function App(){
  return (
    <Wrap>
      <Profile name='김사과' gender='여자' hp='01011111111' color='deeppink'/>
      <Profile name='반하나' gender='여자' hp='01022222222' color='orange' /*isSpecial={true}*/ isSpecial />
      <Profile color='deepskyblue'/>
      <Profile name='이메론' gender='남자' hp='01033333333' color='gold'/>
    </Wrap>
  );
}


export default App;