import React from 'react';
import { css } from 'glamor';
import Carousel from '../carousel/carousel';
import CarouselItem from '../carouselitem/carouselitem';
import { connect } from 'react-redux';
import { fetchCarouselData } from "../../store/carousel/action";

class HomePage extends React.Component {

    constructor(props) {
        super(props);         
        
        this.state = {
            carouselItems: []
        };   
    }

    componentDidMount() {              
        this.props.fetchCarouselData();        
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
      fetchCarouselData: () => dispatch(fetchCarouselData())
    };
};

const mapStateToProps = state => {     
    return { carouselItems: state.carouselData };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);