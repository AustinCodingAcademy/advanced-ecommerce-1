import React, { Component } from "react";
import ProductDetail from './components/productDetail';
import Carousel from  './components/carousel';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from "./components/footer";
import Example from "./components/example";
import "./App.css";

export default class App extends Component {
    state = {
        info: [],
        cart: [],
        isTrue: false
    }

    componentDidMount(){
        fetch('/products')
            .then(res=>res.json())
            .then(data=>{
                this.setState({info: data})
            })
    }

    wasClicked=(update)=>{
        if(update.length > 1){
           this.GetCheckOut(update)
        }
    }
    GetCheckOut(update){
        fetch('/orders', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"cart": update})
        })
            .then(res => res.json())
            .then(data => data)
            this.setState({cart: []})
        }

    addToCart=(update)=>{
        this.setState({cart: [...this.state.cart, update]})
    }
        render(){
            return (
            <div className="App">
            <Header cart={this.state.cart} wasClicked={this.wasClicked}/>
                <div className="container">
                    <div className="row">
                    <Sidebar cart={this.state.cart}/>
                    <div className="col-md-9">
                        <Carousel />
                        <Example />

                        <div className="row">
                            {this.state.info.map((value, i) => {
                                 return <ProductDetail key={i} info={value} addToCart={this.addToCart}/>
                            })}
                        </div>
                    </div>
                    </div>
                </div>
            <Footer />                   
        </div>
        ) 
        }
        }