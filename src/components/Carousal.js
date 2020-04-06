import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

class Carousal extends Component {
  render() {
    return (
      <NavCarousal>
        <Carousel>
     
            <div>
                <img src="img/1.jpg" />
            </div>
            <div>
                <img src="img/2.jpg" />
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                <img src="img/3.jpg" />
                {/* <p className="legend">Legend 3</p> */}
            </div>
            
        </Carousel>
        </NavCarousal>
    );
}
}


export default Carousal;

const NavCarousal = styled.div`
.carousel .thumb{
  display:none !important;
}

`;