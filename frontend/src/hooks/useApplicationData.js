import { useReducer } from 'react';

const INITIAL_STATE = {
  likes: [],
  selectedPhoto: null,
  modal: false
};

const ACTIONS = {
  TOGGLE_LIKE: 'TOGGLE_LIKE',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_PHOTO: 'CLOSE_PHOTO'
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

    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const updateToFavPhotoIds = photoId => dispatch({ type: ACTIONS.TOGGLE_LIKE, payload: photoId });

  const setPhotoSelected = photo => dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });

  const onClosePhotoDetailsModal = () => dispatch({ type: ACTIONS.CLOSE_PHOTO });

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
};