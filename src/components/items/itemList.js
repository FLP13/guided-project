import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './item';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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