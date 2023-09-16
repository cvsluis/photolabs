import React, { useCallback, useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from "mocks/photos";
import PhotoDetailsModal from './PhotoDetailsModal';

import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  // state for favouriting photos
  const [like, setLike] = useState([]);
  const toggleLike = (photoId) => like.includes(photoId) ? setLike(like.filter(e => e !== photoId)) : setLike([...like, photoId]);
  const isLiked = (photoId) => like.includes(photoId);
  const isFavPhotoExist = like.length > 0;

  // state for opening the photo details modal
  const [modal, setModal] = useState(false);
  const showModal = () => setModal(true);
  const hideModal = () => setModal(false);

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList isLiked={isLiked} toggleLike={toggleLike} photos={photos} showModal={showModal}/>
      {modal && <PhotoDetailsModal hideModal={hideModal}/>}
    </div>
  );
};

export default HomeRoute;
