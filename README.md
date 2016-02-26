# Handle the failure of API call
## What is this challenge
Sometimes we need to call third-party APIs that we don't control, and if they fail randomly then we should attempt several retries until the call succeeds.
This is a sample challenge of the situation.
  
There is a webservice which has API `api1`.
You had to implement the client which calls this API.

BUT!!!
This API sometimes returns 404. (Its API call fails about 20% for some reason.)
So you need to fix this "Retry" implementation properly in your client again.

## How to solve
### STEP1. Fix "Retry" properly
Please edit [main.js](src/main.js) to pass [test1.js](test/test1.js) in everytime.

### STEP2. Write a document
Please write "What is the issue of [main.js](src/main.js)?",and "How did you fix it to handle failure of API call?" on [answer.md](answer.md).
