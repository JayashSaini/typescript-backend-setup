import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import morganMiddleware from "./logger/morgon.logger.js";
import { ApiError } from "./utils/ApiError.js";

import { config } from "./config/index.js";

const app = express();

// Separate middleware configuration
const corsOptions: cors.CorsOptions = {
	origin: config.corsOrigin === "*" ? "*" : config.corsOrigin.split(","),
	credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); // configure static file to save images locally

app.use(morganMiddleware);

import { errorHandler } from "./middlewares/error.middlewares.js";
import { ApiResponse } from "./utils/ApiResponse.js";

app.get("/api/v1/healthcheck", (req: Request, res: Response) => {
	res.status(200).json(new ApiResponse(200, {}, "Server is running"));
});

// if endpoint not found
app.use((_, __, next: NextFunction) => {
	const error = new ApiError(404, "endpoint not found");
	next(error);
});

// common error handling middleware
app.use(errorHandler);

// Add Swagger documentation route

export { app };
