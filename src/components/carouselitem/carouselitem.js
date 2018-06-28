import React from 'react';
import { css } from 'glamor';
import  * as componentStyles from './carouselitem.style';

export default class CarouselItem extends React.Component {

    constructor(props) {
        super(props);         
        
        this.state = {
            width: window.innerWidth,
            imagePath: this.props.imagePath,
            imageName: this.props.title                      
        };   
    }

    componentDidMount() {              
        window.addEventListener("resize", this.updateDimensions);
    }
  
    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions = () => {
        let newWidth = window.innerWidth;               
        this.setState({width: newWidth})        
    }   

    render() {
        
        return (<div {...css(componentStyles.carouselItem)}>
                    <img {...css(componentStyles.carouselImage)} src = {this.state.imagePath} style={this.state.width < carouselProperties.mobileThreshold ? {width: this.state.width}: null}/> 
                    <p {...css(componentStyles.ImageTitle)}>{this.state.imageName.split(',')[0].substring(0, 20)}</p>                
                </div>); 

    }
}

export const carouselProperties =  {  
    mobileThreshold: 768
}