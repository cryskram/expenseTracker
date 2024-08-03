import express from "express";
import router from "./routes/fetch.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.use("/fetch", router);

app.listen(PORT, () => {
  console.log(`[SERVER] 🚀 Running at port ${PORT}`);
});
