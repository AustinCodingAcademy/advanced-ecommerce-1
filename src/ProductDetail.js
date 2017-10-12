import React from 'react';

function ProductDetail (props) {
  let star = <span className='glyphicon glyphicon-star' />;
  let starNumber = [<span className='glyphicon glyphicon-star' />,
    <div><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' /></div>,
    <div><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' /></div>,
    <div><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' /></div>,
    <div><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' /><span className='glyphicon glyphicon-star' /></div>];
    return (
            <div className='col-sm-4 col-lg-4 col-md-4'>
            <div className='thumbnail'>
              <img className='thumbs' src={props.products.imgUrl} alt='' />
              <div className='caption'>
                  <h4 className='pull-right'>{props.products.price}</h4>
                  <h4><a href='#'>{props.products.name}</a>
                  </h4>
                  <p>{props.products.description}</p>
              </div>
              <div className='ratings'>
                  <p className='pull-right'>{props.products.reviews}</p>
                  <p>
                      {starNumber[props.products.rating - 1]}

                  </p>
              </div>
            </div>
            </div>
    );
}

export default ProductDetail;
