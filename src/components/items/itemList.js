import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './item';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    @media (max-width:${props => props.theme.mediumScreen}) {
        grid-template-columns: 50% 50%;
    }
    @media (max-width: ${props => props.theme.smallScreen}) {
        grid-template-columns: 100%;
    }
`;


const ItemList = ({ items, setSelectedItem }) => {
    return (
        <Wrapper>
            { items.map(item => <Item key={item.id} item={item} setSelectedItem={setSelectedItem} /> ) }
        </Wrapper>
    );
};

ItemList.propTypes = {
    items: PropTypes.array,
    setSelectedItem: PropTypes.func
};

export default ItemList;