const API_URL = "https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status";
const API_KEY = "your_api_key";

function searchFlights(flightNumber, departureDate) {
  let url = `${API_URL}/${flightNumber}/dep/${departureDate}?appId=${API_KEY}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let flight = data.flightStatus;
      console.log(`Flight ${flightNumber} from ${flight.departureAirportFsCode} to ${flight.arrivalAirportFsCode} on ${departureDate} is currently ${flight.status}`);
    })
    .catch(error => {
      console.error(`An error occurred while searching for flight ${flightNumber}: ${error}`);
    });
}

searchFlights("AA100", "2023-02-08");
