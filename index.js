const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const userRouter = require("./routers/userRouter");

app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"] }));
app.use("/user", userRouter);

app.get("/", (req, res) => {
  console.log("request accepted");
  res.send("Server Online!!");
});

app.listen(port, () => {
  console.log("server started ...");
});
