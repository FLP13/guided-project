import React from 'react';
import styled from 'styled-components';
import { useFetchItemList } from '../hooks/useFetch';
import { ItemList } from '../components/itemlist/ItemList';


export const Deals: React.FC = () => {

    const {data, loading, error} = useFetchItemList(true);
    console.log(data);

    return (
        <Wrapper>
            { data    && <ItemList items={data.items} /> }
            { loading && <p>LOADING...</p> }
            { error   && <p>ERROR!</p> }
        </Wrapper>
    );
};

const Wrapper = styled.div`
    max-width: ${props => props.theme.maxWidth};
`;