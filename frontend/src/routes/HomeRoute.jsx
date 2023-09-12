import React, { useCallback, useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from "mocks/photos";

import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  const [like, setLike] = useState([]);
  const toggleLike = (id) => like.includes(id) ? setLike(like.filter(e => e !== id)) : setLike([...like, id]);

  return (
    <div className="home-route">
      <TopNavigationBar />
      <PhotoList like={like} toggleLike={toggleLike} photos={photos} />
    </div>
  );
};

export default HomeRoute;
