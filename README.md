# node-api
Simple evaluation/investigation of a REST api using node/express.

###Initial
A very basic server (GET /ping returns pong).

####
Added a very basic, hard-coded, implementation of a GET request for dogs. Note this has the express 'app' injected in, it then configures routes on this and supplied the data.

Now implements a POST method, allowing user to add a dog (still only stored in-memory - persistence to come!). N.B. To do this had to require in body-parser middleware for express.

PUT (amends a record) and DELETE methods added. 


#### Break out repository
Brokemn out repository concerns into a separate module, this will hopefully aid testing.
