// Require the framework and instantiate it
const fastify = require("fastify")({
  logger: true,
});

fastify.register(require("fastify-cors"));

fastify.addHook("preHandler", async (req, res) => {
  // mitigate attacks related to content-type sniffing
  res.header("X-Content-Type-Options", "nosniff");
});

// Declare a route
fastify.get("/", async (request, reply) => {
  //   request.log.info("Some info about the current request");
  //   reply.send({ hello: "world" });

  reply.type("application/json").code(200);
  return { hello: "world" };
});

module.exports = fastify;
