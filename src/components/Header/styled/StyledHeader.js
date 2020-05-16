import styled from 'styled-components';

export const HeaderH1 = styled.h1 `

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 30px;
    pading: 10px; /*@Piotr: literówka - padding, zainstaluj sobie wtyczkę podświetlającą syntax w styled components: https://styled-components.com/docs/tooling#syntax-highlighting */
    color: darkgoldenrod; /*@Piotr: kolorki lepiej zapisywać w rgba albo najlepiej w hexach. Możesz np. stworzyć sobie globalnie plik theme.js i tam trzymać kolory jako stałe np. const Blue = '#0062ff'. Będziesz miał pewność że używasz wszędzie tych samych.*/
    margin: 0;
    color: white;
    text-shadow: 2px 2px 0px rgba(184,134,11,0.79);

@media (min-width: 880px) {
        font-size: 42px;

};

@media (min-width: 1025px) { 
        font-size: 50px;

};

`