import styled from 'styled-components';
import { connect } from 'react-redux';
import normal from '../img/background/man-3915438_1920.jpg';
import clouds from '../img/background/clouds-3353159_1920.jpg';
import lightning from '../img/background/lightning-1158027_1920.jpg';
import rain from '../img/background/person-731165_1920.jpg';
import sky from '../img/background/sky-690293_1920.jpg';
import clearSky from '../img/background/clear.jpg';
import haze from '../img/background/haze.jpg';

function switchBackground(props) {

    const state = {
        reduxData: props.state.state
    }
    const initialData = {
        name: '',
        weather: [
            {},
        ],
    };

    const backgroundData = state.reduxData || initialData;
    const setBackground = backgroundData.weather.map(element => element.main).toString();

    switch (setBackground) {
        case 'Clear':
            return clearSky;
        case 'Haze':
            return haze;
        case 'Sky':
            return sky;
        case 'Lightning':
            return lightning;
        case 'Rain':
            return rain;
        case "Clouds":
            return clouds;
        default:
            return normal;
    }

}

const StyledAppBackground = styled.div`
    
    background-image: url(${switchBackground});
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
`
const mapStateToProps = state => (
    { state: state }
)

export default connect(mapStateToProps, null)(StyledAppBackground)