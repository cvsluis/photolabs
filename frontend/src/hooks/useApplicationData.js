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


// The state object will contain the entire state of the application.
// The updateToFavPhotoIds action can be used to set the favourite photos.
// The setPhotoSelected action can be used when the user selects a photo.
// The onClosePhotoDetailsModal action can be used to close the modal.