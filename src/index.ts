import { config } from "./config/index.js";

import { app } from "./app.js";

import logger from "./logger/winston.logger.js";
import { Server } from "http";

const PORT = Number(config.port) || 8000;
const HOST = config.host || "0.0.0.0";

let server: Server | null = null;

async function startApp(): Promise<void> {
	try {
		// Start the server and store the server instance
		server = app.listen(PORT, HOST, () => {
			logger.info(`✅ Server is running on port: ${PORT}`);
		});
	} catch (error) {
		logger.error("Error starting the server: ", error);
		process.exit(1); // Exit process on failure
	}
}

async function stopServer(): Promise<void> {
	if (!server) {
		return;
	} // Server is not running

	try {
		await new Promise<void>((resolve, reject) => {
			server?.close(err => {
				if (err) {
					reject(err); // Reject if there's an error
				} else {
					resolve(); // Resolve when the server has been closed
				}
			});
		});

		// Disconnect from the database

		logger.info("✅ Server is shutting down...");
	} catch (error) {
		logger.error("Error stopping the server: ", error);

		process.exit(1); // Exit process on failure
	} finally {
		process.exit(0); // Exit process gracefully
	}
}

//   Initializes and starts the server by connecting to the database and launching the application.
async function startServer(): Promise<void> {
	try {
		// Start the application
		await startApp();
	} catch (error) {
		logger.error("❌ Application initialization failed: ", error);
		process.exit(1); // Exit process on failure
	}
}

// Gracefully handle termination signals
process.on("SIGINT", stopServer);
process.on("SIGTERM", stopServer);

// Start the app
startServer();
