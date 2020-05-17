import styled from 'styled-components';
import { device } from '../../../devicesBrakpoints/devicesBrakpoints';

export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;

@media ${device.mobile} {
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 60%;
        margin: auto;
        padding-top: 20px;
        padding-bottom: 20px;
        
}

`

