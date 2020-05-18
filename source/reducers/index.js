// FIXME:
// Reducer, fn puras: (state0, action) => state1

// A travez de la Store, se conectan con los ACTIONS
// Recordemos que las Reducers estan dentro de la Store

// Toma el STATE y el ACTION que estamos ejecutando al
// momento de que ocurra un evento, y por medio del
// ACTION (type y payload) evalua las modificaciones
// para devolver el nuevo STATE

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      if (state.mylist.filter((items) => items.id === action.payload.id).length > 0) {
        // ya existe en mylist
        return state;
      }
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find((video) => video.id === Number(action.payload)) ||
                  state.originals.find((video) => video.id === Number(action.payload)) ||
                  [],
      };
    default:
      return state;
  }
};

export default reducer;
