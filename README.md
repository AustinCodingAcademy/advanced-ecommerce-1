#### Setup
Fork, clone, run yarn install, yarn start, pull request

#### Do
 * Create a component folder to hold component files
 * Organize this web page into appropriate components
   * ProductDetail - find a div with className="col-sm-4 col-lg-4 col-md-4"
   <!-- * Header - find a div with className="navbar-header" -->
   <!-- * Footer - find a footer element -->
   <!-- * Carousel - find a div with className="row carousel-holder" -->
* The ProductDetail should repesent only one single product
* The ProductDetail should take a prop called product with is an object, and use it to populate price, name, description reviews and stars.
* Make sure each component is in its own file and imported into App.js
* Use the provided data in state.js to dynamically populate information instead of the hard coded html that is there now.
* In index.js provide App with a prop called "products" sending in the product array
* App should use the product prop and map the array of products into an array of ProductDetail components
* Make the star images represent the number rating from data
