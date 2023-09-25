import React from 'react';
import FavIcon from './FavIcon';
import SunIcon from './SunIcon';
import '../styles/FavBadge.scss';
import MoonIcon from './MoonIcon';

const FavBadge = ({ dark, setDark, isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true} dark={dark}/>
      <div className='dark-mode' onClick={setDark}>
      {dark ? <SunIcon /> : <MoonIcon />}
      </div>
    </div>
  ) 
};

export default FavBadge;