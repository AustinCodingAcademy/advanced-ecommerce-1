import React from "react";
import ProductDetail from './ProductDetail';

function ProductGrid(props){

    var prodList = props.products.map(function(product){
        return <ProductDetail product={product} key={product.id} />
    });

    return (
        <div className="flex flex-wrap mxn2">
            {prodList}
        </div>
    )
}

export default ProductGrid;