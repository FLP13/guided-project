import { useState, useEffect } from 'react';
import Item from '../models/item';

const SUPERSTORE_ENDPOINT = 'https://gp-super-store-api.herokuapp.com';

const getItemList = async() => {
    const rawData = await fetch(`${SUPERSTORE_ENDPOINT}/item/list?sortDir=asc`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const data = await rawData.json();
    data.items = await data.items.map(item => {
        return new Item(
            item._id, 
            item.name, 
            item.description, 
            item.price, 
            item.avgRating, 
            item.imageUrl, 
            item.stockCount,
            item.isOnSale
        );
    });
    return data;
};

const getItemListOnSale = async() => {
    const rawData = await fetch(`${SUPERSTORE_ENDPOINT}/item/list?sortDir=asc&isOnSale=true`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const data = await rawData.json();
    data.items = data.items.map(item => {
        return new Item(
            item._id, 
            item.name, 
            item.description, 
            item.price, 
            item.avgRating, 
            item.imageUrl, 
            item.stockCount,
            item.isOnSale
        );
    });
    return data;
};

const getItemDetails = async(id) => {
    const rawData = await fetch(`${SUPERSTORE_ENDPOINT}/item/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const item = await rawData.json();
    return new Item(
        item._id, 
        item.name, 
        item.description, 
        item.price, 
        item.avgRating, 
        item.imageUrl, 
        item.stockCount,
        item.isOnSale
    );
};

export const useFetch = (options) => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState('INITILIZED');

    useEffect(() => {
        const fetchData = async() => {
            try {
                setStatus('LOADING');
                let data;
                switch (options.type) {
                case 'ITEM_LIST':
                    data = await getItemList();
                    break;
                case 'ITEM_LIST_ONSALE':
                    data = await getItemListOnSale();
                    break;
                case 'ITEM_DETAILS':
                    data = await getItemDetails(options.id);
                    break;
                default:
                    data = {};
                }
                setData(data);
                setStatus('DONE');
            } catch(error) {
                setStatus('ERROR');
            }
        };
        fetchData();
    }, []);

    return {data, status};
};