#### Setup
Fork, clone, run yarn install, yarn start, pull request

#### Do
 * Create a component folder to hold component files
 * Organize this web page into appropriate components
   * ProductDetail
   * Header
   * Footer
   * Carousel
   * Think of some other components you could make
* The ProductDetail should repesent only one single product
* The ProductDetail should take a prop called product with is an object, and use it to populate price, name, description reviews and stars.
* Make sure each component is in its own file and imported into App.js
* Use the provided data in state.js to dynamically populate information instead of the hard coded html that is there now.
* In index.js provide App with a prop called "products" sending in the product array 
* App should use the product prop and map the array of products into an array of ProductDetail components
* Make the star images represent the number rating from data.
* Bonus. Notice the grey stars.

### Add Item To Cart
* Add a button to ProductDetail "Add To Cart"
* When the button is clicked it should increase the value of the state numberOfItemsInCart by 1
* The Header should update to show the current value of numberOfItemsInCart
* How does Header get that information in order to show it?
* How do you update Header so that it shows the number when it changes?
* How do you make one component affect something in another component?
