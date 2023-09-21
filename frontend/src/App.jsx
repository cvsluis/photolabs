import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';

const App = () => {
  const {
    state: { likes, selectedPhoto, modal, photoData, topicData },
    updateToFavPhotoIds,
    setPhotoSelected,
    getPhotosByTopic,
    onClosePhotoDetailsModal
  } = useApplicationData();

  const isLiked = photoId => likes.includes(photoId);
  const isFavPhotoExist = likes.length > 0;

  return (
    <div className="App">
      <HomeRoute
        isFavPhotoExist={isFavPhotoExist}
        isLiked={isLiked}
        toggleLike={updateToFavPhotoIds}
        photos={photoData}
        topics={topicData}
        getPhotosByTopic={getPhotosByTopic}
        showModal={setPhotoSelected}
      />
      {modal &&
        <PhotoDetailsModal
          showModal={setPhotoSelected}
          hideModal={onClosePhotoDetailsModal}
          selectedPhoto={selectedPhoto}
          isLiked={isLiked}
          toggleLike={updateToFavPhotoIds}
        />}
    </div>
  );
};

export default App;
