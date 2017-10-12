import React from 'react'

class ProductDetail extends React.Component {
    
    render() {
        const product = this.props.product
        const productRating = this.props.product.rating
        

        function renderRating(productRating) { 
            let stars = []
            for (let i = 0; i < productRating; i++){
                stars.push(<span className="glyphicon glyphicon-star"></span>)  
            };
            if (stars.length !== 5){
                let emptyStars = (5 - stars.length);
                for (let i = 0; i < emptyStars; i++){
                    stars.push(<span className="glyphicon glyphicon-star-empty"></span>)
                };
                
            } 
            return stars;
        
        }
     
        return (
            <div className="col-sm-4 col-lg-4 col-md-4">
                <div className="thumbnail">
                    <img src={product.imgUrl} alt=""/>
                    <div className="caption column">
                        <h4 className="pull-right">{product.price}</h4>
                        <h4><a href="#">{product.name}</a>
                        </h4>
                        <p>{product.description}</p>
                    </div>
                    <div className="ratings">
                        <p className="pull-right">{product.reviews} reviews</p>
                        <p>
                            {renderRating(productRating)}
                        </p>
                    </div>
                </div>
            </div> 
        )
    }
}

export default ProductDetail;