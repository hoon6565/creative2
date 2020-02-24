
const url = "https://api.nasa.gov/planetary/apod?api_key=E2Jmr7fh7HMJ5J9CC1iaGncMAcOrbiCn88D0d8QY";

fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    let Title = "";
    Title += '<h3>' + json.title + '</h3>'
    let Today = "";
    Today += '<p>' + json.date + '</p>'
    let Video = "";
    Video += '<iframe width="600" height="400" src="' + json.url + '"></iframe>'
    let Description = "";
    Description += '<p>' + json.explanation + '</p>'
    document.getElementById("title").innerHTML = Title;
    document.getElementById("date").innerHTML = Today;
    document.getElementById("video").innerHTML = Video;
    document.getElementById("description").innerHTML = Description;
  });