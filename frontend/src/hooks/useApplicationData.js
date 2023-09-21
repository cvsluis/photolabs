import { useReducer, useEffect } from 'react';

const INITIAL_STATE = {
  likes: [],
  selectedPhoto: null,
  modal: false,
  photoData: [],
  topicData: []
};

const ACTIONS = {
  TOGGLE_LIKE: 'TOGGLE_LIKE',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_PHOTO: 'CLOSE_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_LIKE:
      const photoId = action.payload;
      if (state.likes.includes(photoId)) {
        return { ...state, likes: state.likes.filter(id => id !== photoId) };
      };
      return { ...state, likes: [...state.likes, photoId] };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, modal: true, selectedPhoto: action.payload };

    case ACTIONS.CLOSE_PHOTO:
      return { ...state, modal: false, selectedPhoto: null };

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };

    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const updateToFavPhotoIds = photoId => dispatch({ type: ACTIONS.TOGGLE_LIKE, payload: photoId });

  const setPhotoSelected = photo => dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });

  const onClosePhotoDetailsModal = () => dispatch({ type: ACTIONS.CLOSE_PHOTO });

  const getPhotosByTopic = topicId => {
    fetch(`/api/topics/photos/${topicId}`)
      .then(res => res.json())
      .then(photosByTopic => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photosByTopic });
        console.log(state.photoData);
      });
  };

  useEffect(() => {
    fetch(`/api/photos`)
      .then(res => res.json())
      .then(photoData => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData }));
  }, []);

  useEffect(() => {
    fetch(`/api/topics`)
      .then(res => res.json())
      .then(topicData => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData }));
  }, []);

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    getPhotosByTopic,
    onClosePhotoDetailsModal
  };
};