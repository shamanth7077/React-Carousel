import React from 'react';
import { shallow, mount } from 'enzyme';
import CarouselItem from './carouselitem'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as enzyme from 'enzyme';
import { expect } from 'chai';

(enzyme).configure({ adapter: new Adapter() });

let wrapper;
let imagePath = 'http://www.test.png';
let title = "The Picture";

beforeEach(() => {        
    wrapper = mount(<CarouselItem imagePath={imagePath} title={title}/>);     
})

describe('Check if component loads properly without crashing', () => {       
    it('Check component loads', () => {        
        expect(wrapper).to.have.length(1)   
    });
});

describe('Check if main elements of component are loaded', () => {
    it('renders CarouselItem Container', () => {                
        expect(wrapper.find('div')).to.have.length(1);
    });
    
    it('renders CarouselItem Image', () => {               
        expect(wrapper.find('img')).to.have.length(1);
    });

    it('renders CarouselItem Title', () => {               
        expect(wrapper.find('p')).to.have.length(1);
    });
})