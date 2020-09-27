import React from 'react';
import qs from 'qs';

const Home = ( {location} ) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix:true
  })
  const detail = query.detail === 'true';
  return(
    <div>
      <h1>소개</h1>
      <p>이 페이지는 리액트 소개 페이지입니다.</p>
      { detail && <p>추가된 정보입니다.</p>}
    </div>
  )
}

export default Home;