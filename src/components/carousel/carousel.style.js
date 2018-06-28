export const carouselContainer= {
    width: '100%',
    margin: '0 auto',
    backgroundColor: '#E9EEE6',
    borderRadius: '4px',
    boxShadow: '0 2px 6px 0 rgba(0,0,0,0.1)',
    padding: '50px 0',
    overflowX: 'hidden',
    '@media(max-width: 767px)': {
        padding: '50px 0 0'
    }
}
export const carouselItemsWrapper = {
    padding: '25px 0',
    width: '3500px',
    backgroundColor: '#FFF',
    overflow: 'auto',    
    transition: 'transform .3s ease-out'    
}
export const carouselItem= {
   float: 'left',
   margin: '0 10px',
   '@media(max-width: 767px)': {
    margin: '0'
}   
}
export const carouselImage = {
   height: '300px',
   width: '300px',
   '@media(max-width: 767px)': {
        height: '300px'
   }
}
export const navigationButtons= {
    display: 'block',
    clear: 'both',
    margin: '0 auto',
    width: '150px',
    marginTop: '50px',
    '@media(max-width: 767px)': {
        display:'none'
    }

}
export const navigationButton = {    
    padding: '15px 20px',    
    fontSize: '1em',
    color: '#FFF',
    backgroundColor: '#2C72A1',
    cursor: 'pointer'
}
export const navbuttonPrev = {
    borderRadius: '5px 0 0 5px'
}
export const navbuttonNext = {
    borderRadius: '0 5px 5px 0',
    marginLeft: '5px'
}
export const mobileNavigations = {
    position: 'absolute',
    width: '100vw',
    top: '275px',    
    '@media(min-width: 768px)': {
        display:'none'
    }
}
export const mobilePrevButton = {
    transform: 'rotate(180deg)',
    float: 'left',
    backgroundColor: '#FFF',
    opacity: '.7',
    padding: '20px 0 15px 20px',
    borderRadius: '50px 0 0 50px',
    cursor: 'pointer'
}
export const mobileNextButton = {
    float: 'right',
    backgroundColor: '#FFF',
    opacity: '.7',
    padding: '20px 0 15px 20px',
    borderRadius: '50px 0 0 50px',
    cursor: 'pointer'
}
export const H1 = {
    color: '#00669A',
    fontSize: '4em',
    margin: '0 0 50px 25px',
    '@media(max-width: 767px)': {
        fontSize: '3em',
        margin: '0 0 50px 25px',
    }
}
export const ImageTitle = {
    color: '#00669A',
    fontSize: '1.125em',
    padding: '10px',
    textTransform: 'capitalize',
    '@media(max-width: 767px)': {
        fontSize: '2em',    
        padding: '20px 10px 10px'    
    }
}