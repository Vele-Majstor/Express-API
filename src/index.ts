import app from "./server";
import router from "./router";
import dotenv from "dotenv";
import config from "../src/config/index";
import { authenticate } from "./modules/auth";
dotenv.config();

app.listen(config.port, () => {
  console.log(`ayyyy lmao ${config.port}`);
});

app.use("/api", authenticate, router);
