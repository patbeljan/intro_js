// from data.js
var tableData = data;
console.log(tableData);
// YOUR CODE HERE!
var tbody = d3.select("tbody");

var button = d3.select("#filter-btn");

button.on("click", function(){

  // remove any children from the list to
  tbody.html("");

  var dateElement = d3.select("#datetime");

  var date = dateElement.property("value");
  console.log(date);
  console.log(typeof date);
  var validSightings = tableData.filter(sighting => sighting.datetime === date);

  console.log(validSightings);

  validSightings.forEach(function(sighting){
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]){
      var cell = row.append("td");
      cell.text(value);
    });
  });

});
