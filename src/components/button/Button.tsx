import React from 'react';
import styled from 'styled-components';


type Props = {
    onClick?: () => void,
    text: string
}

export const Button: React.FC<Props> = ({onClick, text}) => {
    return (
        <StyledButton onClick={onClick}>
            <span>{text}</span>
        </StyledButton>
    );
};

const StyledButton =styled.button`
    padding: 8px 15px;
    width: 150px;
    background: orange;
    color: white;
    border: 1px solid orange;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
`;