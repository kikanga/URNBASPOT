// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

// Helper Functions (in this case the only one is runQuery)
const helpers = {

//   runQuery: (args) => {
// //enter queries here
//     console.log(args);

//     // Figure out the geolocation
//     var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;
//     return axios.get(queryURL).then(function(response) {
//       // If get get a result, return that result's formatted address property
//       if (response.data.results[0]) {
//         return response.data.results[0].formatted;
//       }
//       // If we don't get any results, return an empty string
//       return "";
//     });
//   },


  // This function hits our own server to retrieve the record of query results
  getPlayer: function(playerID) {
    return axios.get("/players/" + playerID);
  },

  getRoster: function(Tm) {
    return axios.get("/team/" + Tm);
  },

  // This function posts new searches to our database.
  // postHistory: function(args) {
  //   return axios.post("/api", { location: location });
  // }
   
};

// We export the helpers function (which contains getGithubInfo)
export default helpers;
