import express from "express";
import cors from "cors";
import userRouter from "./routes/user-route";
import { logger } from "./utils/logger";
import authRouter from "./routes/auth-route";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => res.send("Hello From Express"));

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    logger.error(err.stack);
    res.status(500).send("Something broke!");
  }
);

app.listen(port, () => {
  logger.info(`Server is listening on port: http://localhost:${port}`);
});
