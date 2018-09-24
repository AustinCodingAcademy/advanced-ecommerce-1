function ProductDetails(product) {
    return(
        <div>
    <h1>{product.ProductsDetails.price}</h1>
    <h1>{product.ProductsDetails.name}</h1>
    <h2>{product.ProductsDetails.description}</h2>
    <h1>{product.ProductsDetails.review}</h1>
    <h1>{product.ProductsDetails.stars}</h1>
    </div>
    )
}
<button onClick = {() => console.log('Add to Cart')}> Add to Cart</button>;