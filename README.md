Ayurtech Average API

A simple REST API that accepts numbers through a POST "/average" endpoint and returns the average of all numbers received so far.

How to run

Install dependencies:

npm install

Start the server:

npm start

The server runs on:

"http://localhost:3000"

API

POST /average

Request:

{
  "number": 10
}

Response:

{
  "average": 10
}

The API keeps track of all numbers received.

Example:

- Send "10" → average = "10"
- Send "20" → average = "15"
- Send "30" → average = "20"

Test with cURL

curl.exe -X POST "http://localhost:3000/average" -H "Content-Type: application/json" --data-binary "@body.json"
