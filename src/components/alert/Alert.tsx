import React from 'react';
import styled from 'styled-components';

type Props = {
    text: string
    variant?: string
}

export const Alert: React.FC<Props> = ({text, variant}) => {
    return (
        <Wrapper variant={variant}>
            {text}
        </Wrapper>
    );
}; 

type StyledProps = {
    variant?: string
}

const Wrapper = styled.p<StyledProps>`
    background: ${props => props.variant === 'error' ? props.theme.melon : props.theme.columbiaBlue};
    color: ${props => props.variant === 'error' ? props.theme.torchRed : props.theme.dodgerBlue};
    padding: 8px;
    border-radius: 5px;
`;