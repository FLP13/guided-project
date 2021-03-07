function Item(id, name, description, price, rating, imageUrl, stockCount, isOnSale) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.rating = rating;
    this.imageUrl = imageUrl;
    this.stockCount = stockCount;
    this.isOnSale = isOnSale;
}

export default Item;