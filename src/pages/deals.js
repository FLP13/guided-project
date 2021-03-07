import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ItemList from '../components/items/itemList';

const Wrapper = styled.div`
    max-width: ${props => props.theme.maxWidth};
`;

const Deals = ({ items, setSelectedItem }) => {

    const itemWithDeals = items.filter(item => item.isOnSale);

    return (
        <Wrapper>
            <ItemList items={itemWithDeals} setSelectedItem={setSelectedItem} />
        </Wrapper>
    );
};

Deals.propTypes = {
    items: PropTypes.array,
    setSelectedItem: PropTypes.func
};

export default Deals;