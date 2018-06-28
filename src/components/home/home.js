import React from 'react';
import { css } from 'glamor';
import Carousel from '../carousel/carousel';
import CarouselItem from '../carouselitem/carouselitem';
import { connect } from 'react-redux';
import { fetchCarouselData } from "../../store/carousel/action";
import { imageSourceURL } from "../../config/carousel.config"

class HomePage extends React.Component {

    constructor(props) {
        super(props);         
        
        this.state = {
            carouselItems: []
        };   
    }

    componentDidMount() {              
        this.props.fetchCarouselData(imageSourceURL);        
    }
  
    componentWillReceiveProps(newProps) {              
        this.setState({carouselItems : newProps.carouselItems})
    }

    render() {
        
        return (<section>
                        <Carousel>
                        {
                            this.state.carouselItems.map((carouselItem) => (                            
                                    <CarouselItem imagePath={carouselItem.webformatURL} title={carouselItem.tags}/>
                            ))
                        }                            
                        </Carousel>
                </section>); 
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchCarouselData: (imageSource) => dispatch(fetchCarouselData(imageSource))
    };
};

const mapStateToProps = state => {     
    return { carouselItems: state.carouselData };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);