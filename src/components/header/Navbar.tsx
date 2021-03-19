import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
    return (
        <Wrapper>
            {
                NAVIGATION_OPTIONS.map((option, i) => {
                    return (
                        <NavItem key={i}>
                            <NavLink exact to={option.route} activeStyle={activeLink}>{ option.title }</NavLink>
                        </NavItem>
                    );
                })
            }
        </Wrapper>
    );
};

const NAVIGATION_OPTIONS = [
    { title: 'Home',  route: '/'}, 
    { title: 'Deals', route: '/deals'},
    { title: 'Cart',  route: '/cart'}
];

const Wrapper = styled.div`
    display:flex;
`;

const NavItem = styled.h2`
    margin-right: 10px;
    a {
        text-decoration: unset;
        color: ${props => props.theme.whiteSmoke};

        :hover {
            text-decoration: underline;
        }
    }
`;
const activeLink = {
    textDecoration: 'underline'
};