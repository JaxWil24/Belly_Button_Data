// Sort the cities in descending order of population growth
var sortedCities = cityGrowth.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

// Select only the top five cities in terms of growth
var topFiveCities = sortedCities.slice(0,5);

// Create separate arrays for the city names and their population growths
var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

// Use Plotly to create a bar chart with these arrays
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

// Skill Drill 12.2.2
// Sort the cities in order of population
var sortByPopulation = cityGrowths.sort((a,b) => a.population - b.population);

// Select only the top seven largest cities
var sevenLargestCities = sortByPopulation.slice(0,7);

// Create separate arrays for the city names and their population growths
var largestCityNames = cityGrowths.map(city => city.City);
var largestCityPopulation = cityGrowths.map(city => parseInt(city.population));

// Use Plotly to create a bar chart with these arrays
var trace = {
    x: largestCityNames,
    y: largestCityPopulation,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Largest Population of Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population"}
  };
  Plotly.newPlot("bar-plot", data, layout);