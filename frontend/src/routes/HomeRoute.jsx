import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ isFavPhotoExist, isLiked, toggleLike, photos, topics, showModal }) => {
  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={isFavPhotoExist} topics={topics} />
      <PhotoList isLiked={isLiked} toggleLike={toggleLike} photos={photos} showModal={showModal} />
    </div>
  );
};

export default HomeRoute;
