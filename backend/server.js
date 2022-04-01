const express = require("express");
const cors = require("cors");
const userRoute = require("./src/routes/userRoute");
// const db = require("./src/models");
const passport = require("passport");
const path = require("path");
const fs = require("fs");

var corsOptions = {
  origin: ["http://localhost:3000"],
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
// db.sequelize.sync();
app.use(passport.initialize());
app.use("/src/images", express.static(path.join(__dirname, "src/images")));

require("./src/middleware/passport")(passport);
//Routes

app.use("/api/users", userRoute);

// app.use((req, res, next) => {
//   res.status(404).send({
//     status: 404,
//     error: "Please Enter Correct Route, Current Route Not found",
//   });
// });


const listener = app.listen(process.env.PORT || 8080, () => {
  console.log("Your app is listening on port " + listener.address().port);
}
);
