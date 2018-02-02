import React from 'react';
import Header from './components/header';
import Menu from './components/menu';
import Carousel from './components/carousel';
import ProductDetail from './components/productdetail';
import Footer from './components/footer';
import './App.css';

function App(props) {
    return (
        <div className="App">
            {/*<Header>*/}
            <Header state={props.state} checkout={props.checkout} />
            {/*</Header>*/}
    
        <div className="container">
    
            <div className="row">
    
                {/*<Menu>*/}
                <Menu />
                {/*</Menu>*/}
    
                <div className="col-md-9">
                    {/*<Carousel>*/}
                    <Carousel />
                    {/*</Carousel>*/}
                    <div className="row">
                        {/*<ProductDetail>*/}
                        {props.state.products.map(function(product) {
                            return <ProductDetail rerender={props.rerender} key={product.id} product={product} state={props.state} />
                        })}
                        {/*</ProductDetail>*/}
                    </div>
    
                </div>
    
            </div>
    
        </div>
        
        <div className="container">
            <hr/>
    
            {/*<Footer>*/}
            <Footer />
            {/*</Footer>*/}
        </div>
    </div>
    );
}

export default App;
