import React from 'react';
import { shallow, mount } from 'enzyme';
import Carousel from './carousel'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as enzyme from 'enzyme';
import { expect } from 'chai';

(enzyme).configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {        
    wrapper = mount(<Carousel/>);     
})

describe('Check if component loads properly without crashing', () => {       
    it('Check component loads', () => {        
        expect(wrapper).to.have.length(1)   
    });
});

describe('Check if main elements of component are loaded', () => {
    it('renders Carousel component', () => {                
        expect(wrapper.find('#carousel')).to.have.length(1);
    });
    
    it('renders Carousel navigation buttons', () => {               
        expect(wrapper.find('#navButtons')).to.have.length(1);
    });
    it('renders Carousel mobile navigation buttons', () => {               
        expect(wrapper.find('#mobileNavButtons')).to.have.length(1);
    });
})