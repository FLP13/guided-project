import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { useFetchItemDetails } from '../hooks/useFetch';

import { ItemDetails } from '../components/itemdetails/ItemDetails';

interface MatchParams {
    id: string;
}

export const Item: React.FC = () => {

    const id = useRouteMatch<MatchParams>().params.id;

    const {data, loading, error} = useFetchItemDetails(id);

    return (
        <Wrapper>
            { data    && <ItemDetails item={data} />}
            { loading && 'LOADING' && <p>LOADING...</p>}
            { error   && <p>ERROR</p>}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    max-width: ${props => props.theme.maxWidth};
`;