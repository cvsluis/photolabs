import { useState } from 'react';

export const useApplicationData = () => {
  const [likes, setLikes] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [modal, setModal] = useState(false);

  const updateToFavPhotoIds = (photoId) => {
    likes.includes(photoId) ? setLikes(likes.filter(e => e !== photoId)) : setLikes([...likes, photoId]);
  };

  const setPhotoSelected = (photo) => {
    setModal(true);
    setSelectedPhoto(photo);
  };

  const onClosePhotoDetailsModal = () => {
    setModal(false);
    setSelectedPhoto(null);
  };

  return {
    state: { likes, selectedPhoto, modal },
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
};