import styled from 'styled-components';

export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;

@media (min-width: 880px /*@Piotr: dobry patent to osobny plik ze stałymi z wielkościami ekranu. I tak najczęściej wszędzie korzystasz z tych samych wymiarów, więc możesz sobie zrobić np. const DesktopBreakpoint = 1024 */ ) {
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 60%;
        margin: auto;
        padding-top: 20px;
        padding-bottom: 20px;
}

/*@Piotr: rozdziel te dwa komponenty na osobne pliki - zachowasz przejrzystość importów w pikach */`
export const Button = styled.a`
        margin: 10px;
        min-width: 217px;
        text-align: center;
        border-radius: 10px;
        text-decoration: none;
        color: white;
        text-shadow: 2px 2px 0px rgba(184,134,11,0.79);
        border: 3px solid darkgoldenrod /*@Piotr: kolory z theme.js */;
        padding: 10px;
        font-size: medium;
        max-width: 290px;
        
`

