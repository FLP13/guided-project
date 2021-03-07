import { useEffect, useRef, useReducer } from 'react';
import Item from '../models/item';

const baseUrl = 'https://gp-super-store-api.herokuapp.com';

const useFetch = (url) => {
    const cache = useRef({});

    const initialState = {
        status: 'idle',
        error: null,
        data: [],
    };

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
        case 'FETCHING':
            return { ...initialState, status: 'fetching' };
        case 'FETCHED':
            return { ...initialState, status: 'fetched', data: action.payload };
        case 'FETCH_ERROR':
            return { ...initialState, status: 'error', error: action.payload };
        default:
            return state;
        }
    }, initialState);

    useEffect(() => {
        let cancelRequest = false;
        if (!url) return;

        const fetchData = async () => {
            dispatch({ type: 'FETCHING' });
            if (cache.current[url]) {
                const data = cache.current[url];
                dispatch({ type: 'FETCHED', payload: data });
            } else {
                try {
                    const response = await fetch(url);
                    let data = await response.json();
                    cache.current[url] = data;
                    if (cancelRequest) return;
                    dispatch({ type: 'FETCHED', payload: data });
                } catch (error) {
                    if (cancelRequest) return;
                    dispatch({ type: 'FETCH_ERROR', payload: error.message });
                }
            }
        };

        fetchData();

        return function cleanup() {
            cancelRequest = true;
        };
    }, [url]);

    return state;
};

export const useFetchItem = (id) => {
    const state = useFetch(`${baseUrl}/item/${id}`);
    state.item = state.status === 'fetched' ? convertToItem(state.data) : null;
    return state;
};

export const useFetchItemList = () => {
    const state = useFetch(`${baseUrl}/item/list`);
    if (state.status === 'fetched') {
        let items = state.data.items.map(item => convertToItem(item));
        // Filter duplicates
        items = items.filter((thing, index, self) =>
            index === self.findIndex((t) => (
                t.name === thing.name && t.price === thing.price
            ))
        );
        state.items = items;
    }
    return state;
};

const convertToItem = (item) => {
    return new Item(
        item.id || item._id, 
        item.name, 
        item.description, 
        item.price, 
        item.avgRating, 
        item.imageUrl, 
        item.stockCount,
        item.isOnSale
    );
};