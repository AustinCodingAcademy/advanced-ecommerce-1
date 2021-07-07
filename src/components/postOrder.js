
exports.data = function () {
  return fetch("/newOrders", {
    headers: {
      "content-type": "application/json"
    },
    method: "GET"
  }).then(response => response.json()); 
};


exports.order = function (order) {
  return fetch("/newOrders", {
    body: JSON.stringify(order),
    headers: {
      "content-type": "application/json"
    },
    method: "POST"
  }).then(response => response.json()); 
};


