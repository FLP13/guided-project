import { React } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Ratings from './ratings';
import Button from '../button/button';

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
const PriceWrapper = styled.div`
    display: flex;
`;
const Price = styled.strong`
    font-size: 20px;
    margin: 0 13px 13px 0;
`;
const OnSale = styled.strong`
    background: red;
    color: white;
    padding: 0 6px 2px;
    margin-top: 4px;
    font-size: 16px;
    height: 20px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    margin: 15px 0;
    a {
        margin: auto;
    }
`;

const Item = ({ item }) => {
    return (
        <Wrapper>
            <ImageWrapper>
                <div>
                    <Image src={item.imageUrl} resizeMode="contain" />
                </div>
            </ImageWrapper>
            <Title>{ item.name }</Title>
            <Ratings rating={item.rating} />
            <PriceWrapper>
                <Price>${ item.price }</Price>
                {item.isOnSale && <OnSale>On Sale</OnSale>}
            </PriceWrapper>
            <ButtonWrapper>
                <Link to={`/item/${item.id}`}>
                    <Button text={'View Item'} />
                </Link>
            </ButtonWrapper>
        </Wrapper>
    );
};

Item.propTypes = {
    item: PropTypes.object,
    setSelectedItem: PropTypes.func
};

export default Item;