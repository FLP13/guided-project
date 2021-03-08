import Item from '../models/item';

// DEPRECATED, USING useFetch hook now instead, is this better or worse or own preference?

const SUPERSTORE_ENDPOINT = 'https://gp-super-store-api.herokuapp.com';

const getItemListFromBackend = async() => {
    const rawData = await fetch(`${SUPERSTORE_ENDPOINT}/item/list`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const data = await rawData.json();
    return data;
};

const getItemList = async() => {
    try {
        const data = await getItemListFromBackend();
        let items = [];
        data.items.forEach(item => {
            items.push(new Item(
                item._id, 
                item.name, 
                item.description, 
                item.price, 
                item.avgRating, 
                item.imageUrl, 
                item.stockCount,
                item.isOnSale
            ));
        });
        
        // Filter duplicates
        items = items.filter((thing, index, self) =>
            index === self.findIndex((t) => (
                t.name === thing.name && t.price === thing.price
            ))
        );

        return items;
    } catch (error) {
        console.log(error);
    }
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

export default { getItemList, getItemDetails };