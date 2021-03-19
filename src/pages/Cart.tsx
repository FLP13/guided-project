import React from 'react';
import styled from 'styled-components';

export const Cart: React.FC = () => {

    return (
        <div>
            <Wrapper>
                hej
            </Wrapper>
        </div>
    );
};

const Wrapper = styled.div`
    background: black;
    max-width: ${props => props.theme.maxWidth};
    height: 500px;
    color: white;
`;