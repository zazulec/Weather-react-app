import React from 'react';
import { HeaderH1 } from './styled/StyledHeader';

function Header() {

    return (
            <HeaderH1>
                Probably the best weather app in this repository!
            </HeaderH1>
    )
}

export default Header;
//@Piotr: generalnie dobrze jest unikać default exportów - jak projekt się rozrasta i używasz tych samych konponentów w różnych miejscach, to IDE przy export default potrafi się pogubić 