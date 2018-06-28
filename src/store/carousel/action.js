import { GET_CAROUSEL_ITEMS } from "./action-types";
import { LOAD_CAROUSEL_ITEMS_SUCCESS } from "./action-types";
import axios from 'axios';
import { imageSourceURL } from "../../config/carousel.config";


export const getCarouselData = () => ({type : GET_CAROUSEL_ITEMS });

export const createCarouselData = (carouselData) => ({ type: LOAD_CAROUSEL_ITEMS_SUCCESS, payload: carouselData });

export const fetchCarouselData = () => {
    
    return (dispatch) => {
        dispatch(getCarouselData())        
        return axios.get(imageSourceURL).then(
            (response) => {               
                let carouselItems = response.data.hits.slice(0,12)                
                dispatch(createCarouselData(carouselItems))
            },
            (err) => {

            }
        )
    }
}