import { React } from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useFetchItem } from '../hooks/useFetch';

const Wrapper = styled.div`
    max-width: ${props => props.theme.maxWidth};
`;

const ItemDetails = ({ selectedItem }) => {

    const id = useRouteMatch().params.id;

    // To only fetch when needed
    const {status, error, item} = selectedItem ? { status: 'fetched', error: null, item: selectedItem} : useFetchItem(id);

    return (
        <Wrapper>
            {
                status === 'fetched' && <>
                    <p>{item.name}</p>
                    <p>{item.id}</p>
                </>
            }
            {
                status === 'fetching' && <>
                    <p>LOADING ITEM...</p>
                </>
            }
            {
                error && <>
                    <p>ERROR FETCHING ITEM</p>
                </>
            }
        </Wrapper>
    );
};

ItemDetails.propTypes = {
    selectedItem: PropTypes.object
};

export default ItemDetails;