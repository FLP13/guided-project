import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './item';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    @media (max-width:${props => props.theme.mediumScreen}) {
        grid-template-columns: auto auto;
    }
    @media (max-width: ${props => props.theme.smallScreen}) {
        grid-template-columns: auto;
    }
`;


const ItemList = ({ items, status }) => {
    return (
        <Wrapper>
            { status === 'DONE'    && items.map(item => <Item key={item.id} item={item} /> ) }
            { status === 'LOADING' && <p>LOADING...</p> }
            { status === 'ERROR'   && <p>ERROR</p> }
        </Wrapper>
    );
};

ItemList.propTypes = {
    items: PropTypes.array,
    status: PropTypes.string
};

export default ItemList;