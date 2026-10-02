const http = require("http");

const data = JSON.stringify({
  number: 40
});

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/average",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(data)
  }
};

const request = http.request(options, (response) => {
  let body = "";

  response.on("data", (chunk) => {
    body += chunk;
  });

  response.on("end", () => {
    console.log("Response:", body);
  });
});

request.on("error", (error) => {
  console.error("Error:", error.message);
});

request.write(data);
request.end();