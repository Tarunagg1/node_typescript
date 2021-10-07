import express from "express";
import connect from "./db/connect";
import log from "./logger";
import routes from "./routes/routes";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  log.info(`server listning at: ${PORT}`);

  // connect to db
  connect();

  // routes
  routes(app);
});
