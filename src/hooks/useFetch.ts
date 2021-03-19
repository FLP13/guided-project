import { useState, useEffect } from 'react';
import { ItemData, getItemList, Item, getItemDetails } from '../services/ItemService';

export const useFetchItemList = (isOnSale = false): {data: ItemData | undefined, loading: boolean, error: boolean} => {
    const [data, setData] = useState<ItemData>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async() => {
            try {
                setLoading(true);
                const data = await getItemList(isOnSale);
                setData(data);
            } catch(error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [isOnSale]);

    return {data, loading, error };
};

export const useFetchItemDetails = (id: string): {data: Item | undefined, loading: boolean, error: boolean} => {
    const [data, setData] = useState<Item>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async() => {
            try {
                setLoading(true);
                const data = await getItemDetails(id);
                setData(data);
            } catch(error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    return {data, loading, error };
};