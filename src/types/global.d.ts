// src/global.d.ts

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			PORT: number;

			NODE_ENV: "development" | "production";

			CORS_ORIGIN: string;

			HOST: string;
		}
	}
}
