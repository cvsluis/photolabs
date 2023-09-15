import React from "react";
import PhotoListItem from "./PhotoListItem";


import "../styles/PhotoList.scss";

const PhotoList = ({ isLiked, toggleLike, photos }) => {
  const photoList = photos.map(photo => {
    return (
      <PhotoListItem key={photo.id} isLiked={isLiked} toggleLike={toggleLike} photoId={photo.id} data={photo} />
    );
  });

  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
