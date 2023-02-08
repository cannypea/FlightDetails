# FlightDetails
Here's an example of a simple JavaScript code for a flight booking app that communicates with a flight API to retrieve flight information
This code uses the fetch API to retrieve flight information from the Flightstats API. The searchFlights function takes in a flightNumber and a departureDate as arguments and constructs a URL using the API endpoint and API key. The fetch function is used to make a request to the API, and the response is processed as a JSON object. The flight variable is used to store the flight information and log relevant details to the console. If an error occurs while fetching the flight information, it is logged to the console.