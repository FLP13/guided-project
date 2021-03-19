import React, { useState } from 'react';
import styled from 'styled-components';
import { Item } from '../../services/ItemService';

import { Ratings } from '../ratings/Ratings';
import { Price } from '../price/Price';
import { Button } from '../button/Button';
import { Alert } from '../alert/Alert';

type Props = {
    item: Item
}

export const ItemDetails: React.FC<Props> = ({item}) => {
    
    const [inStock, setInStock] = useState(item.stockCount);
    const [quantitySelected, setQuantitySelected] = useState(1);
    const [inBasket, setInBasket] = useState(0);
    
    const changeSelectedQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const quantity = parseInt(e.currentTarget.value);
        setQuantitySelected(quantity);
    };

    const addToBasket = () => {
        setInStock(inStock-quantitySelected);
        setInBasket(inBasket+quantitySelected);
        setQuantitySelected(1);
    };

    const outOfStock = inStock === 0;

    return (
        <Wrapper>
            <ImageWrapper>
                <div>
                    <Image src={item.imageUrl} />
                </div>
            </ImageWrapper>
            <Details>
                <Title>{item.name}</Title>
                <Ratings rating={item.avgRating} />
                <Divider />
                <Description>{item.description}</Description>
                <Price price={item.price} isOnSale={item.isOnSale} />
                <StockSelector>
                    <span>
                    Quantity:
                    </span> 
                    <select onChange={(e) => changeSelectedQuantity(e)} disabled={outOfStock}>
                        {
                            [...Array(inStock)].map((_, i) => {
                                return <option key={i} value={i+1}>{i+1}</option>;
                            })
                        }
                    </select>
                </StockSelector>
                <Button onClick={addToBasket} text={'Add to cart'} disabled={outOfStock} />
                {
                    outOfStock && <Alert variant="error" text={'Out of stock.'} />
                }
                {
                    inBasket > 0 && <Alert text={`${inBasket} of this item is currently in your cart.`} />
                }
            </Details>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
`;

const Image = styled.img`
    max-height: 300px;
    width: 300px;
`;

const ImageWrapper = styled.div`
    height: 300px;
    width: 300px;

    margin-right: 34px;

    display: flex;
    div {
        margin: auto;
    }
`;

const Details = styled.div`
    display: block;
    flex-direction: column;
`;

const Title = styled.h2`
    font-weight: 450;
    font-size: 22px;
    white-space: nowrap;
    margin: 13px 0 5px;
`;

const Divider = styled.div`
    margin: 8px 0;
    border-top: 1px solid black;
`;

const Description = styled.p`
    max-width: 300px;
`;

const StockSelector = styled.div`
    padding: 8px 0;
    margin-bottom: 8px;
    font-size: 20px;
    span {
        margin-right: 8px; 
    }
    select {
        width: auto;
        padding: 8px;
        background: #e2e2e2;
    }
`;