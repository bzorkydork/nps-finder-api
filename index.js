"use strict";

const apiKey = "AIzaSyDWpbv1ZuvaPwXo35tXhTaZLTopPqF5oKk";
const searchURL = "https://api.nps.gov/api/v1/parks";

// Event Listener
$(document).ready(function() {
  watchSubmitForm();
});

// Watch the Submit Form
function watchSubmitForm() {
  console.log("watchSumbitForm works!");
  $("#jsForm").submit(e => {
    e.preventDefault();
    let searchState = $("#states-name").val();
    let numResults = $("#results-number").val();
    getNationalParks(searchState, numResults);
  });
}

// Send Request
function getNationalParks(state, maxResults = 10) {
  console.log("getNationalParks works");
  console.log(state, maxResults);
  fetch(`${searchURL}?api_key=${apiKey}&stateCode=${state}&limit=${maxResults}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      console.log(err);
      alert("Something went wrong, try again!");
    });
}

// Render Results In DOM
function displayResults(responseJson) {
  console.log("displayResult function works");
  $("#js-results").empty();
  for (let i = 0; i < responseJson.data.length; i++) {
    $("#js-results").append(`<br> <br>
    <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">${responseJson.data[i].fullName}</h3>
    </div>
    <div class="panel-body">
    <div class= "row>
     <div class="col-md-3">
     <h4 class="panel-title">${responseJson.data[i].description}</h4>
     <p> <p>
     </div>
     <div class= "row>
     <div class="col-md-3">
     <a href=" ${responseJson.data[i].url}">Visit Park's Website</a>
     </div>
    </div> 
  </div>`);
  }
  $("#js-results").removeClass("hidden");
}
