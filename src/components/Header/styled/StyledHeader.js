import styled from 'styled-components';
import { device } from '../../../devicesBrakpoints/devicesBrakpoints';
import { theme } from '../../../theme/theme';

export const HeaderH1 = styled.h1 `

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 30px;
    padding: 10px; 
    color: ${theme.gold};
    margin: 0;
    color: white;
    text-shadow: 2px 2px 0px ${theme.goldshadow};

@media ${device.mobile} {

        font-size: 42px;

};

@media ${device.screen}{ 
        
        font-size: 50px;

};

`