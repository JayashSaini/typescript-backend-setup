import dotenv from "dotenv";

dotenv.config({
	path: `.env.${process.env.NODE_ENV}`,
});

export const config = {
	nodeEnv: (process.env.NODE_ENV || "development") as
		| "development"
		| "production",
	port: process.env.PORT || 8000,
	host: process.env.HOST || "127.0.0.1",
	databaseUrl: process.env.DATABASE_URL || "",
	corsOrigin: process.env.CORS_ORIGIN || "*",
};
