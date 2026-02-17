// Load Node's built-in HTTP module.
const http = require("http");

// Create an HTTP server and define the request handler.
const server = http.createServer((req, res) => {
  // Send a 200 OK status with a plain-text content type.
  res.writeHead(200, { "Content-Type": "text/plain" });
  // End the response with a greeting and a newline.
  res.end("Hello, World!\n");
});

// Read the port from the environment or fall back to 8080.
const port = process.env.PORT || 8080;
// Start listening on the chosen port.
server.listen(port, () => {
  // Log a message once the server is ready.
  console.log(`Listening on port ${port}`);
});
