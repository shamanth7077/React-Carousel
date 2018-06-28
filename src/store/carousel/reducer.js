import { GET_CAROUSEL_ITEMS, LOAD_CAROUSEL_ITEMS_SUCCESS } from "./action-types";

const initialState = {
  isFetching: false,
  carouselData: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case GET_CAROUSEL_ITEMS:        
        return Object.assign({}, state, {
          isFetching : true
        });
      
      case LOAD_CAROUSEL_ITEMS_SUCCESS:        
        return Object.assign({}, state, {
          isFetching : false,
          carouselData : action.payload
        });
      
      default:
        return state;
    }
};
export default rootReducer;