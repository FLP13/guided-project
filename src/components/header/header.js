import { React } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import Navbar from './navbar';

const WrapperOuter = styled.div`
    background: ${props => props.theme.denim};
    padding: 10px;
`;
// To make the navbar jump to next row in smaller screens
const WrapperInner = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: ${props => props.theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
`;
// Better way to align the this?
const Title = styled.h1`
    margin-top: auto;
    margin-bottom: auto;
    flex: 1;
    min-width: 300px;
    a {
        text-decoration: unset;
        color: ${props => props.theme.whiteSmoke};
    }
`;

const NavbarWrapper = styled.div`
    margin-top: auto;
    margin-bottom: auto;
`;

const Header = () => {
    return (
        <WrapperOuter>
            <WrapperInner>
                <Title>
                    <Link to="/">
                        SuperStore
                    </Link>
                </Title>
                <NavbarWrapper>
                    <Navbar />
                </NavbarWrapper>
            </WrapperInner>
        </WrapperOuter>
    );
};

export default Header;