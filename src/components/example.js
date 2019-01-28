import React from 'react';

export default class Example extends React.Component {
  render() {
    return (
      <div className="col-sm-4 col-lg-4 col-md-4">
        <h4><a href="#">Like this template?</a>
        </h4>
        <p>If you like this template, then check out <a target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this tutorial</a> on how to build a working review system for your online store!</p>
        <a className="btn btn-primary" target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">View Tutorial</a>
      </div>
    )
  }
}