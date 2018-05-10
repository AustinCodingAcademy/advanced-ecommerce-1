#### Setup
Fork, clone, run npm install, npm start, pull request

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


### Add Item To Cart V2
* Adding 1 to a counter is not a realistic way to add an item to the shopping cart
* How would you alter the structure of the state object to represent a realistic way to do this
* How would you alter the data in the state object to represent adding an item to a cart
* How would Header now show how many items are in cart
* Add a checkout button

### Checkout
* Let's create a very simple checkout process
* When you click the checkout button, whatever products are in the cart should somehow be processed so a person knows to ship those products to the customer
* What should happen in your webpage when this button is clicked?
* Notice the file in the root directory db.json. 
* When the user does a checkout the cart should be saved in db.json 
* You can save information to this file by doing an HTTP Post to the URL http://localhost:4000/orders
* How do we make HTTP requests in code?
* Empty the cart

