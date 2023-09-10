import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div>
      <img src={props.data.imageSource}></img>
      <img src={props.data.profile}></img>
      <p>{props.data.username}</p>
      <p>{props.data.location.city}, {props.data.location.country}</p>
    </div>
  );
};

export default PhotoListItem;
