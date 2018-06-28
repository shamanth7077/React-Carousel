import React from 'react';
import { shallow, mount } from 'enzyme';
import HomePage from './home';
import Carousel from '../carousel/carousel';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as enzyme from 'enzyme';
import { Provider}  from "react-redux";
import configureMockStore from "redux-mock-store";
import { expect } from 'chai';
import thunk from 'redux-thunk';

(enzyme).configure({ adapter: new Adapter() });

let wrapper;
let store;
const mockStore = configureMockStore([thunk]);
const initialState = {
    isFetching: false,
    carouselData: []
}; 

beforeEach(() => {    
    store = mockStore(initialState)
    wrapper = mount(<Provider store={store}><HomePage/></Provider>);     
})

describe('Check if home page loads with all the components', () => {       
    it('Check component loads', () => {        
        expect(wrapper).to.have.length(1)   
    });

    it('Check <Carousel/> component loads', () => {        
        expect(wrapper.find(Carousel)).to.have.length(1)   
    });
   
});

