import React, { useCallback, useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from "mocks/photos";

import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  const [like, setLike] = useState([]);
  const toggleLike = (photoId) => like.includes(photoId) ? setLike(like.filter(e => e !== photoId)) : setLike([...like, photoId]);
  const isLiked = (photoId) => like.includes(photoId);

  return (
    <div className="home-route">
      <TopNavigationBar />
      <PhotoList isLiked={isLiked} toggleLike={toggleLike} photos={photos} />
    </div>
  );
};

export default HomeRoute;
