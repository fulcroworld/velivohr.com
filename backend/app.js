/**
 * import the needful
 */
import "dotenv/config";
import Fastify from "fastify";
import cors from "@fastify/cors";
import routes from "./config/routes.js";

/**
 * init the fastify
 */
const app = Fastify({ logger: true });

/**
 * configure CORS
 */
await app.register(cors, {
  origin: [process.env.FE_URL],
  methods: ["GET", "POST", "OPTIONS"],
});

/**
 * register the routes
 */
await app.register(routes);

/**
 * init server
 */
app.listen(
  { port: process.env.APP_PORT || 5000, host: "0.0.0.0" },
  (err, address) => {
    if (err) {
      app.log.error(err);

      process.exit(1);
    }
  },
);
