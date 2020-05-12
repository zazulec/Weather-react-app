import React from 'react';

import { HeaderH1 } from './styled/StyledHeader';
import { Background } from './styled/StyledBackground';

function Header() {

    return (
        <Background>
            <HeaderH1>
                Probably the best weather app in this repository!
            </HeaderH1>
        </Background>
    )
}

export default Header;