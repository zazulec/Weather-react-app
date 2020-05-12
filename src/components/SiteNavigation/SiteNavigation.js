import React from 'react';
import { Background } from './styled/StyledBackground';
import { Navigation, Button } from './styled/StyledNavigation';
import { Text } from './styled/StyledParagraph';

const SiteNavigation = () => {

    return (
        <Background >
            <Navigation>
                <Button as="a" href="/"> Current weather </Button>
                <Text> {`<== Choose ==>`}</Text>
                <Button as="a" href="/FiveDays" > Five days forecast </Button>
            </Navigation>
        </Background>
    )
}

export default SiteNavigation;