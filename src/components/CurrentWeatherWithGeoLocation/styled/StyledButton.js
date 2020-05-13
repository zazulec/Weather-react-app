import styled from 'styled-components';

export const Button = styled.button`
    color: white;
    background-color: rgba(184,134,11);
    border-radius: 10px;
    cursor: pointer;
    border: none;
    padding: 10px 26px;
    font-size: 14px;
    margin: 10px;
    outline: none;
`

export const ButtonDisabled = styled(Button)`
    background-color: rgba(184,134,11, 0.4);
`