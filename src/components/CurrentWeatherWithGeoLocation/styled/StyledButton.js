import styled from 'styled-components';
import { theme } from '../../../theme/theme';

export const Button = styled.button`
    color: white;
    background-color: ${theme.gold};
    border-radius: 10px;
    cursor: pointer;
    border: none;
    padding: 10px 26px;
    font-size: 14px;
    margin: 10px;
    outline: none;
    
`

export const ButtonDisabled = styled(Button)`
    background-color: ${theme.buttonDisable};

`