// ADD YOUR MAPBOX ACCESS TOKEN
mapboxgl.accessToken = "pk.eyJ1IjoiZWxsZXphIiwiYSI6ImNtMTg4cXdkbjEwbjgyam9qY2MzbzF4Z3gifQ.8ZHcxMt1E_EN9JQt4d4xUw"; //YOUR KEY HERE


// CREATE A NEW OBJECT CALLED MAP
const map = new mapboxgl.Map({
  container: "map", // container ID for the map object (this points to the HTML element)
  style: "mapbox://styles/elleza/cm1891eor00au01nw77yw68xx", //YOUR STYLE URL
  center: [-73.9442, 40.6482], // starting position [lng, lat] (google brooklyn)
  zoom: 11, // starting zoom (adjust it as you wish)
  projection: "globe", // display the map as a 3D globe
});
