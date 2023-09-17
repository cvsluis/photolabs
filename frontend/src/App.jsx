import React, { useCallback, useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  // state for favouriting photos
  const [like, setLike] = useState([]);
  const toggleLike = (photoId) => like.includes(photoId) ? setLike(like.filter(e => e !== photoId)) : setLike([...like, photoId]);
  const isLiked = (photoId) => like.includes(photoId);
  const isFavPhotoExist = like.length > 0;

  // state for keeping track of selected photo when opening modal
  const [selectedPhoto, setSelectedPhoto] = useState();

  // state for opening the photo details modal
  const [modal, setModal] = useState(false);
  const showModal = (photo) => {
    setModal(true);
    setSelectedPhoto(photo);
  };
  const hideModal = () => setModal(false);

  return (
    <div className="App">
      <HomeRoute isFavPhotoExist={isFavPhotoExist} isLiked={isLiked} toggleLike={toggleLike} showModal={showModal} />
      {modal && <PhotoDetailsModal hideModal={hideModal} selectedPhoto={selectedPhoto} isLiked={isLiked} toggleLike={toggleLike} />}
    </div>
  );
};

export default App;
