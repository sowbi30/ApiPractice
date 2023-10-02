var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
    if (request.status === 200) {
        var result = JSON.parse(request.responseText);

        // Use the reduce method to calculate the total population
        var totalPopulation = result.reduce(function (accumulator, country) {
            return accumulator + country.population;
        }, 0);

        // Log the total population
        console.log("Total Population of Countries:", totalPopulation);
    } else {
        console.error("Error:", request.status, request.statusText);
    }
};