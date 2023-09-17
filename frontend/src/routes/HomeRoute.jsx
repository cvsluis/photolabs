import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from "mocks/photos";

import '../styles/HomeRoute.scss';

const HomeRoute = ({ isFavPhotoExist, isLiked, toggleLike, showModal }) => {
  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList isLiked={isLiked} toggleLike={toggleLike} photos={photos} showModal={showModal}/>
    </div>
  );
};

export default HomeRoute;
