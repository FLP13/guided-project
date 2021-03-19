import React from 'react';
import styled from 'styled-components';

type Props = {
    price: number,
    isOnSale: boolean
}

export const Price: React.FC<Props> = ({price, isOnSale}) => {

    return (
        <Wrapper>
            <PriceWrapper>${ price }</PriceWrapper>
            {isOnSale && <OnSale>On Sale</OnSale>}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
`;
const PriceWrapper = styled.strong`
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