'use strict'; 

const apiKey = 'AIzaSyDWpbv1ZuvaPwXo35tXhTaZLTopPqF5oKk'; 
const searchURL = "https://api.nps.gov/api/v1/parks";

// Event Listener
$(document).ready(function() {
    watchSubmitForm();
  });

// Watch the Submit Form
function watchSubmitForm() {
    console.log("watchSumbitForm works!");
    $("#search-form").submit(e => {
      e.preventDefault();
      let searchState = $("#states-name").val();
      let numResults = $("#results-number").val();
      getNationalParks(searchState, numResults);
    });
  }

// Format Search 
function formatQueryParams(params) {
  console.log("formatQueryParams works!")
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}
// Send Request
function getNationalParks(query, maxResults=10){
  const params = {
    
  }
}

// Test console.

// Render Results In DOM