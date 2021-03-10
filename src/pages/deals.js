import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useFetch } from '../services/ItemService';

import ItemList from '../components/items/itemList';

const Wrapper = styled.div`
    max-width: ${props => props.theme.maxWidth};
`;

const Deals = () => {

    const {data, status} = useFetch({type:'ITEM_LIST_ONSALE'});
    

    return (
        <Wrapper>
            <ItemList items={data.items} status={status} />
        </Wrapper>
    );
};

Deals.propTypes = {
    items: PropTypes.array
};

export default Deals;