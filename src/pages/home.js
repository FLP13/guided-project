import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ItemList from '../components/items/itemList';

const Wrapper = styled.div`
    max-width: ${props => props.theme.maxWidth};
`;

const Home = ({ items, setSelectedItem }) => {
    return (
        <Wrapper>
            <ItemList items={items} setSelectedItem={setSelectedItem} />
        </Wrapper>
    );
};

Home.propTypes = {
    items: PropTypes.array,
    setSelectedItem: PropTypes.func
};

export default Home;