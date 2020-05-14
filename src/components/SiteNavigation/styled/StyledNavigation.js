import styled from 'styled-components';

export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;

    @media (min-width: 880px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 60%;
        margin: auto;
        padding-top: 20px;
        padding-bottom: 20px;
    }
`
export const Button = styled.a`
        margin: 10px;
        min-width: 217px;
        text-align: center;
        border-radius: 10px;
        text-decoration: none;
        color: white;
        text-shadow: 2px 2px 0px rgba(184,134,11,0.79);
        border: 3px solid darkgoldenrod;
        padding: 10px;
        font-size: medium;
        max-width: 290px;
`

