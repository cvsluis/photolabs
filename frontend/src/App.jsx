import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';

const App = () => {
  // state and functions to change state imported from useApplicationData
  const {
    state: { likes, selectedPhoto, modal, photoData, topicData },
    updateToFavPhotoIds,
    setPhotoSelected,
    getPhotosByTopic,
    getAllPhotos,
    onClosePhotoDetailsModal
  } = useApplicationData();

  // returns boolean to determine if heart is filled in or not
  const isLiked = photoId => likes.includes(photoId);
  // returns boolean to determine if notification is displayed or not
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
        getAllPhotos={getAllPhotos}
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
