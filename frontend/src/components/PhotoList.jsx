import React from "react";
import PhotoListItem from "./PhotoListItem";


import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { like, toggleLike, photos } = props;

  const photoList = photos.map(photo => {
    return (
      <PhotoListItem key={photo.id} like={like} toggleLike={toggleLike} photoId={photo.id} data={photo} />
    );
  });

  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
