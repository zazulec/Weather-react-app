import styled from 'styled-components';

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 60%;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;

    @media  (max-width: 880px) {
        flex-direction: column;
    }
`
export const Button = styled.a`
    text-decoration: none;
    color: white;
    text-shadow: 2px 2px 0px rgba(184,134,11,0.79);
    border: 3px solid darkgoldenrod;
    padding: 10px;
    font-size: medium;

    @media  (max-width: 880px) {
        margin: 10px;
        min-width: 217px;
        text-align: center;
    }
   
`



