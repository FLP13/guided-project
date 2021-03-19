import React from 'react';
import styled from 'styled-components';

import { Item as ItemType } from '../../services/ItemService';

import { ItemCard } from './ItemCard';

type Props = {
    items: ItemType[]
}

export const ItemList: React.FC<Props> = ({ items }) => {
    return (
        <Wrapper>
            { items.map(item => <ItemCard key={item.id} item={item} /> ) }
        </Wrapper>
    );
};

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