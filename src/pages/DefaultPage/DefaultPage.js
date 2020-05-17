import React, { Component } from 'react';
import { Title } from './styled/StyledTitle';

class DefaultPage extends Component {
    render() {
        return (
            <Title>
                <p>
                    404
                    <br></br>
                    Ups, you got lost!
                    <br></br>
                    You are on the wrong path. Please try repair Url address.
                </p>
            </Title>
        )
    }
}

export { DefaultPage };