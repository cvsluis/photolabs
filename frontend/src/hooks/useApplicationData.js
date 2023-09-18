import { useState } from 'react';

export const useApplicationData = () => {
  // state for favouriting photos
  const [likes, setLikes] = useState([]);
  const toggleLike = (photoId) => likes.includes(photoId) ? setLikes(likes.filter(e => e !== photoId)) : setLikes([...likes, photoId]);
  const isLiked = (photoId) => likes.includes(photoId);
  const isFavPhotoExist = likes.length > 0;

  // state for keeping track of selected photo when opening modal
  const [selectedPhoto, setSelectedPhoto] = useState();

  // state for opening the photo details modal
  const [modal, setModal] = useState(false);
  const showModal = (photo) => {
    setModal(true);
    setSelectedPhoto(photo);
  };
  const hideModal = () => setModal(false);

  return {
    toggleLike,
    isLiked,
    isFavPhotoExist,
    selectedPhoto,
    modal,
    showModal,
    hideModal
  };
};
