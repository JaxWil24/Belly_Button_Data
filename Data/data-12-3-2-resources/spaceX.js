const url = "https://api.spacexdata.com/v2/launchpads";
d3.json("samples.json").then(function(data){
    console.log("hello");
});
d3.json(url).then(data => console.log(data));

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// Skill Drill 12.3.1
d3.json(url).map(location.latitude)
d3.json(url).map(location.longitude)
