import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ isLiked, toggleLike, photoId, data }) => {
  const { urls, user, location } = data;

  return (
    <div className="photo-list__item">
      <PhotoFavButton isLiked={isLiked} toggleLike={toggleLike} photoId={photoId}></PhotoFavButton>
      <img className="photo-list__image" src={urls.regular} alt="Image"></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt={`Profile Image for ${user.username}`}></img>
        <div className="photo-list__user-info">
          <span>{user.username}</span>
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
