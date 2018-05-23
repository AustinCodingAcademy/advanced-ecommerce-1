import React from "react";

function ProductDetail(props){
    return({
        price: "props.price",
        name: "props.name",
        description: "props.description",
        reviews: "props.reviews",
        stars: "props.stars"
    });
}

export default ProductDetail;