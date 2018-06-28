import React from 'react';
import { css } from 'glamor';
import  * as componentStyles from './carousel.style';
import ArrowIcon from '../../assets/icons/arrow.svg';

export default class Carousel extends React.Component {

  constructor(props) {
      super(props);               
      
      this.state = {          
          transformValue: 0,
          width: window.innerWidth,          
          currentItem: 0          
      };   
  }

  componentDidMount() {              
      window.addEventListener("resize", this.updateDimensions);
  }

  componentWillReceiveProps(newProps) {              
      this.setState({carouselItems : newProps.carouselItems})
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
  }

  handlePrevious = () => {
      
      let newTransformValue = this.state.transformValue; 
      
      if(this.state.width < carouselProperties.mobileThreshold){ 
        let currentItem  = this.state.currentItem;
        currentItem = currentItem - 1;
        this.setState({currentItem})
        if(newTransformValue > this.state.width * carouselProperties.carouselItems){          
          this.updateTransformValue(0)
          this.setState({currentItem : 0})
        }
        else if(newTransformValue<0){
          newTransformValue = newTransformValue + this.state.width;
          this.updateTransformValue(newTransformValue)          
        }
      }
      else{             
        if(newTransformValue > (carouselProperties.carouselItems * carouselProperties.carouselItems)){
          this.setState({transformValue: 0})
          this.updateTransformValue(0)
        }
        else if(newTransformValue<0){
          newTransformValue = newTransformValue + (this.state.width / 2);          
          this.updateTransformValue(newTransformValue)
        }   
      }         
  }

  handleNext = () => {
     
      let newTransformValue = this.state.transformValue;       
      
      if(this.state.width < carouselProperties.mobileThreshold){    
          let currentItem  = this.state.currentItem;
          currentItem = currentItem + 1;
          this.setState({currentItem})    
          newTransformValue = newTransformValue - this.state.width;          
          if(newTransformValue < -(this.state.width * carouselProperties.carouselItems)){            
            this.updateTransformValue(0)
            this.setState({currentItem : 0})
          }
          else{                        
            this.updateTransformValue(newTransformValue)
          }
      }
      else{
        newTransformValue = newTransformValue - (this.state.width / 2);
        if(newTransformValue < - (carouselProperties.carouselItems * carouselProperties.desktopItemWidth)){          
          this.updateTransformValue(0)
        }
        else{          
          this.updateTransformValue(newTransformValue)
        }
      }      
  } 

  updateTransformValue = (value) => {
      this.setState({transformValue: value})
  }

  updateDimensions = () => {

      let newWidth = window.innerWidth;
      if(newWidth < carouselProperties.mobileThreshold){
        let newTransformValue =  -(newWidth * this.state.currentItem);        
        this.updateTransformValue(newTransformValue)
        this.setState({width: newWidth})
      }
      else{        
        this.setState({width: newWidth})
        this.updateTransformValue(0)
      }
  }

  render() {
    const carouselItems = this.props.children;
      
    return (<section id="carousel" {...css(componentStyles.carouselContainer)}>
                <h1 {...css(componentStyles.H1)}>Carousel Test</h1>
                <div  {...css(componentStyles.carouselItemsWrapper)} style={{transform: 'translateX('+ this.state.transformValue + 'px)', width: (this.state.width * (carouselProperties.carouselItems + 1)) + carouselProperties.bufferWidth}}>
                    {carouselItems}
                </div>
                <div id="navButtons" {...css(componentStyles.navigationButtons)}> 
                    <span {...css(componentStyles.navigationButton)} {...css(componentStyles.navbuttonPrev)} onClick={this.handlePrevious}>Prev</span>
                    <span {...css(componentStyles.navigationButton)} {...css(componentStyles.navbuttonNext)} onClick={this.handleNext}>Next</span>
                </div>
                <div id="mobileNavButtons" {...css(componentStyles.mobileNavigations)}>
                    <span {...css(componentStyles.mobilePrevButton)} onClick={this.handlePrevious}><img src={ArrowIcon}/></span>
                    <span {...css(componentStyles.mobileNextButton)} onClick={this.handleNext}><img src={ArrowIcon}/></span>
                </div>
            </section>); 

  }
}

export const carouselProperties =  {  
          mobileThreshold: 768,
          carouselItems: 11,
          bufferWidth: 500,
          desktopItemWidth: 320  
}
