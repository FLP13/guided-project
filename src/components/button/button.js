import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const Button = ({onClick, text}) => {
    return (
        <StyledButton onClick={onClick}>
            <span>{text}</span>
        </StyledButton>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string
};

export default Button;