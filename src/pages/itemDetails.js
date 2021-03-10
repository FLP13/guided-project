import { React } from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useFetch } from '../services/ItemService';

const Wrapper = styled.div`
    max-width: ${props => props.theme.maxWidth};
`;

const ItemDetails = () => {

    const id = useRouteMatch().params.id;

    const {data, status} = useFetch({type:'ITEM_DETAILS', id: id});

    return (
        <Wrapper>
            { status === 'DONE'    && <><p>{data.name}</p><p>{data.id}</p></>}
            { status === 'LOADING' && <p>LOADING...</p>}
            { status === 'ERROR'   && <p>ERROR</p>}
        </Wrapper>
    );
};

ItemDetails.propTypes = {
    selectedItem: PropTypes.object
};

export default ItemDetails;