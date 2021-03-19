const SUPERSTORE_ENDPOINT = 'https://gp-super-store-api.herokuapp.com';

export type Item = {
    id: string,
    name: string, 
    description: string, 
    price: number, 
    avgRating: number, 
    imageUrl: string, 
    stockCount: number,
    isOnSale: boolean
}

type RawItem = {
    _id: string,
    name: string, 
    description: string, 
    price: number, 
    avgRating: number, 
    imageUrl: string, 
    stockCount: number,
    isOnSale: boolean
}

type RawItemData = {
    items: RawItem[], 
    total: number, 
    hasMore: boolean, 
    next: number
}

export type ItemData = {
    items: Item[], 
    total: number, 
    hasMore: boolean, 
    next: number
}

const http = <T>(req: RequestInfo): Promise<T> =>
    fetch(req).then(res => res.json());

export const getItemList = async(isOneSale = false): Promise<ItemData> => {

    const isOneSaleParam = isOneSale ? '&isOnSale=true' : '';
    const rawData: RawItemData = await http(`${SUPERSTORE_ENDPOINT}/item/list?sortDir=asc${isOneSaleParam}`);
    const data : ItemData = {
        items: rawData.items.map(rawItem => {
            const item: Item = {
                id: rawItem._id,
                name: rawItem.name,
                description: rawItem.description,
                price: rawItem.price,
                avgRating: rawItem.avgRating,
                imageUrl: rawItem.imageUrl,
                stockCount: rawItem.stockCount,
                isOnSale: rawItem.isOnSale
            };
            return item;
        }),
        total: rawData.total,
        hasMore: rawData.hasMore,
        next: rawData.next
    };

    return data;
};

export const getItemDetails = async(id: string): Promise<Item> => {

    const rawItem: RawItem = await http(`${SUPERSTORE_ENDPOINT}/item/${id}`);

    const item: Item = {
        id: rawItem._id,
        name: rawItem.name,
        description: rawItem.description,
        price: rawItem.price,
        avgRating: rawItem.avgRating,
        imageUrl: rawItem.imageUrl,
        stockCount: rawItem.stockCount,
        isOnSale: rawItem.isOnSale
    };

    return item;
};