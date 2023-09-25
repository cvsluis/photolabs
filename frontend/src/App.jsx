import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';

const App = () => {
  // state and functions to change state imported from useApplicationData
  const {
    state: { likes, selectedPhoto, modal, photoData, topicData, dark },
    updateToFavPhotoIds,
    setPhotoSelected,
    getPhotosByTopic,
    getAllPhotos,
    onClosePhotoDetailsModal,
    setDark
  } = useApplicationData();

  // returns boolean to determine if heart is filled in or not
  const isLiked = photoId => likes.includes(photoId);
  // returns boolean to determine if notification is displayed or not
  const isFavPhotoExist = likes.length > 0;

  return (
    <div className={`App ${dark}`}>
      <HomeRoute
        isFavPhotoExist={isFavPhotoExist}
        isLiked={isLiked}
        toggleLike={updateToFavPhotoIds}
        photos={photoData}
        topics={topicData}
        getPhotosByTopic={getPhotosByTopic}
        getAllPhotos={getAllPhotos}
        showModal={setPhotoSelected}
        dark={dark}
        setDark={setDark}
      />
      {modal &&
        <PhotoDetailsModal
          showModal={setPhotoSelected}
          hideModal={onClosePhotoDetailsModal}
          selectedPhoto={selectedPhoto}
          isLiked={isLiked}
          toggleLike={updateToFavPhotoIds}
          dark={dark}
        />}
    </div>
  );
};

export default App;
