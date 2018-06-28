import { GET_CAROUSEL_ITEMS } from "./action-types";
import { LOAD_CAROUSEL_ITEMS_SUCCESS } from "./action-types";
import axios from 'axios';


export const getCarouselData = () => ({type : GET_CAROUSEL_ITEMS });

export const createCarouselData = (carouselData) => ({ type: LOAD_CAROUSEL_ITEMS_SUCCESS, payload: carouselData });

export const fetchCarouselData = (imageSourceUrl) => {
    
    return (dispatch) => {
        dispatch(getCarouselData())        
        return axios.get(imageSourceUrl).then(
            (response) => {               
                let carouselItems = response.data.hits.slice(0,12)                
                dispatch(createCarouselData(carouselItems))
            },
            (err) => {
                                
            }
        )
    }
}