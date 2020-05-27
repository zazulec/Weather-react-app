import styled from 'styled-components';
import { connect } from 'react-redux';
import main from '../img/background/man-3915438_1920.jpg';
import clouds from '../img/background/clouds-3353159_1920.jpg';
import lightning from '../img/background/lightning-1158027_1920.jpg';
import person from '../img/background/person-731165_1920.jpg';
import sky from '../img/background/sky-690293_1920.jpg';

import dawn from '../img/background/dawn-190055_1280.jpg'; // słaba szerokość

function switchBackground(props) {
    switch (props) {
        case 'sky':
            console.log('sky');
            return sky;
        case 'clouds':
            return clouds;
        default:
            console.log('czy działa')
            return main;
    }
}

// function switchBackground(props.background) {
//     if (background === "sky") {
//         return sky
//     } else {
//         return main
//     }
// }

export const StyledAppBackground = styled.div`
    
    background-image: url(${switchBackground});
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
`
const mapStateToProps = state => ({
    state: state.value
  });

  export default connect(mapStateToProps, null)(StyledAppBackground)