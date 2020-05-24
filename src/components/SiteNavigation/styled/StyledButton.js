import styled from 'styled-components';
import { theme } from '../../../theme/theme';
import { HashLink } from 'react-router-hash-link';

export const Button = styled(HashLink)`
        margin: 10px;
        min-width: 217px;
        text-align: center;
        border-radius: 10px;
        text-decoration: none;
        color: ${theme.white};
        border: 3px solid ${theme.gold};
        padding: 10px;
        font-size: medium;
        max-width: 290px;
        
`
