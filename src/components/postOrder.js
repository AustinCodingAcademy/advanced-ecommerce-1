exports.order = function (order) {
  console.log("here");
    
  return fetch("/newOrders", {
    body: JSON.stringify(order),
    headers: {
      "content-type": "application/json"
    },
    method: "POST"
  }).then(response => response.json()); 
};
