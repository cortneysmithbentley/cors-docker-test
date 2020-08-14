const cors_proxy = require("cors-anywhere");

const cors_server = cors_proxy.createServer({
  originWhitelist: ["http://localhost:3000", "*.bentley.com"],
  requireHeader: ["origin", "x-requested-with"],
  removeHeaders: ["cookie", "cookie2"],
});

module.exports = cors_server;
