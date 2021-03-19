import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Item } from '../../services/ItemService';

import { Price } from '../price/Price';
import { Ratings } from '../ratings/Ratings';
import { Button } from '../button/Button';


type Props = {
    item: Item
}

export const ItemCard: React.FC<Props> = ({ item }) => {
    return (
        <Wrapper>
            <ImageWrapper>
                <div>
                    <Image src={item.imageUrl} />
                </div>
            </ImageWrapper>
            <Title>{ item.name }</Title>
            <Ratings rating={item.avgRating} />
            <Price price={item.price} isOnSale={item.isOnSale} />
            <ButtonWrapper>
                <Link to={`/item/${item.id}`}>
                    <Button text={'View Item'} />
                </Link>
            </ButtonWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    border: 1px solid black;
    padding: 8px 25px;
    margin: 13px;
    max-width: 300px;
`;

const Image = styled.img`
    max-height: 300px;
    width: 300px;
`;

const ImageWrapper = styled.div`
    height: 300px;
    width: 300px;

    display: flex;
    div {
        margin: auto;
    }
`;
const Title = styled.h2`
    font-weight: 450;
    font-size: 22px;
    white-space: nowrap;
    margin: 13px 0 5px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    margin: 15px 0;
    a {
        margin: auto;
    }
`;