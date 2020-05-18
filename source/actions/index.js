// FIXME:
// ACCIONES: Mecanismo en Redux para enviar informacion al store
// A travez de la Store, se conectan con los Reducers (estos estan dentro de la Store)

// type -> Describe la informacion acerca de lo que vamos a hacer
// payload -> objeto que contiene la informacion, que vamos a tener disponible dentro del reducer para que este cumpla su funcion

export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const register = (payload) => ({
  type: 'REGISTER',
  payload,
});

export const getVideoSource = (payload) => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});
