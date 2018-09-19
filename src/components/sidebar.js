import React from "react";

export default class Sidebar extends React.Component {
  buttonClicked(e){
  this.componentDidMount()
  }
  componentDidMount() {
    fetch('/orders')
      .then(res => res.json())
      .then(data => {
        this.setState({ orders: data })
      })
  }
  state = {
    orders: []
  }
  render() {
    return (
      <div className="col-md-3">
        <p className="lead">Shop Name</p>
        <div className="list-group">
          <a href="#" className="list-group-item">
            Category 1
              </a>
          <a href="#" className="list-group-item">
            Category 2
              </a>
          <a href="#" className="list-group-item">
            Category 3
              </a>
        </div>
        <p> items ordered</p>
        
        {this.state.orders.map(function(value, index){
          return <a key={index} href="#" className="list-group-item">
              {value._id}
            </a>;
        })}
        <button style={{ margin: '10px' }} onClick={(e) => { this.buttonClicked(e) }}>Refresh Orders</button>

        <p> items In Cart</p>
        <div className="list-group">
          {this.props.cart.map(function(value, index){
            return <a key={index} href="#" className="list-group-item">
              {value.name} {value.price}
              </a>
          })}
        </div>
      </div>
    )
  }
}
