const server = require("./app");
const cors_proxy = require("./cors")


const start = async () => {
  console.log("in start function!");
  try {
    await server.listen(8080, "0.0.0.0");
    server.log.info(`Server listening on port ${server.server.address().port}`);
    await cors_proxy.listen(7676, "0.0.0.0");
    console.log("cors is listening on 7676!");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
