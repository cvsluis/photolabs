import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';

const App = () => {
  const {
    toggleLike,
    isLiked,
    isFavPhotoExist,
    selectedPhoto,
    modal,
    showModal,
    hideModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute isFavPhotoExist={isFavPhotoExist} isLiked={isLiked} toggleLike={toggleLike} showModal={showModal} />
      {modal && <PhotoDetailsModal showModal={showModal} hideModal={hideModal} selectedPhoto={selectedPhoto} isLiked={isLiked} toggleLike={toggleLike} />}
    </div>
  );
};

export default App;
