Ayurtech Average API

A simple REST API server that exposes a single "POST /average" API.

The API accepts a number in the request body and returns the average of all numbers received by the server so far.

Assignment

API Endpoint

POST /average

Request Body

The request body accepts a number in JSON format:

{
  "number": 10
}

Response

The API returns the average of all numbers received so far:

{
  "average": 10
}

How to Run the Project

1. Clone the repository

git clone <your-github-repository-url>

Go into the project directory:

cd ayurtech-average-api

2. Install dependencies

npm install

3. Start the server

npm start

The server runs on:

http://localhost:3000

API Usage

Send a "POST" request to:

http://localhost:3000/average

with the following JSON body:

{
  "number": 10
}

The response will be:

{
  "average": 10
}

The server keeps track of all numbers received during its execution.

Example

If the following numbers are sent one after another:

10
20
30

The responses will be:

Send 10 → average = 10
Send 20 → average = 15
Send 30 → average = 20

The calculations are:

10 / 1 = 10

(10 + 20) / 2 = 15

(10 + 20 + 30) / 3 = 20

Testing with cURL

A cURL client can be used to test the API.

Create a file named:

body.json

Add the following content:

{
  "number": 10
}

Then run:

curl.exe -X POST "http://localhost:3000/average" -H "Content-Type: application/json" --data-binary "@body.json"

Expected response:

{
  "average": 10
}

You can change the number in "body.json" and send the request again.

Testing with Postman

The API can also be tested using Postman.

Step 1

Open Postman.

Step 2

Select:

POST

Step 3

Enter the URL:

http://localhost:3000/average

Step 4

Go to:

Body → raw → JSON

Step 5

Enter:

{
  "number": 10
}

Step 6

Click Send.

Expected response:

{
  "average": 10
}

Send additional numbers to verify the running average.

For example:

10 → 10
20 → 15
30 → 20

Client

The project also includes a small JavaScript client:

client.js

The client can be used to send a number to the API and receive the current average.

Run the client according to the project configuration.

Project Structure

ayurtech-average-api/
│
├── src/
│   └── server.js
│
├── tests/
│   └── average.test.js
│
├── client.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

Technologies Used

- Node.js
- JavaScript
- REST API
- Express
- cURL
- Postman

Notes

The average is maintained in memory while the server is running.

Restarting the server will reset the stored numbers.

The API is intended for the Ayurtech assignment.
