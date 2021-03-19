import React from 'react';
import styled from 'styled-components';


type Props = {
    onClick?: () => void,
    text: string,
    disabled?: boolean
}

export const Button: React.FC<Props> = ({onClick, text, disabled}) => {
    return (
        <StyledButton disabled={disabled} onClick={() => { if (!disabled && onClick) onClick(); }}>
            <span>{text}</span>
        </StyledButton>
    );
};

type StyledProps = {
    disabled?: boolean
}

const StyledButton = styled.button<StyledProps>`
    padding: 8px 15px;
    width: 150px;
    background: ${props => props.disabled ? 'lightgray' : 'orange'};
    color: white;
    border: 1px solid ${props => props.disabled ? 'lightgray' : 'orange'};
    border-radius: 4px;
    font-size: 16px;
    cursor: ${props => props.disabled ? 'unset' : 'pointer'};;
`;