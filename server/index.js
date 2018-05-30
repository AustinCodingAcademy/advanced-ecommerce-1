require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(require("./routes/OrderRoutes"));

const mongoose = require("mongoose");
const mlabUri = process.env.SECRET || "";
if (!mlabUri) {
  console.log(
    "*************************************************************************"
  );
  console.error(
    "WARNING! Set the SECRET environment variable in .env to your MLAB URI."
  );
  console.log(
    "*************************************************************************"
  );
}
mongoose.connect(mlabUri);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
