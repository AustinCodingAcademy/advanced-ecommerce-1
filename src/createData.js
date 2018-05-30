exports.checkout = function (checkout) {
  return fetch("/checkout", {
    body: JSON.stringify(checkout),
    headers: {
      "content-type": "application/json"
    },
    method: "POST"
  })
      .then(response => response.json());
};
