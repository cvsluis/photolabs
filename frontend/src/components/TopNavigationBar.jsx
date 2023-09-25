import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ dark, setDark, getAllPhotos, topics, getPhotosByTopic, isFavPhotoExist }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={getAllPhotos}>PhotoLabs</span>
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic} />
      <FavBadge dark={dark} setDark={setDark} isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigationBar;