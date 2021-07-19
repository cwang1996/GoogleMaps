//Access token from mapbox website
mapboxgl.accessToken = 
'pk.eyJ1IjoiY3dhbmcxOTk2IiwiYSI6ImNrcjVidDBqODM0ODIydnBhczhxMzlrNDEifQ.oefkzXqeVis5-aaUXJu7vw';

//gets your current location
navigator.geolocation.getCurrentPosition(successLocation, 
    errorLocation, 
    { enableHighAccuracy: true})

function successLocation(position){
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude]);
}

//default error location set at Manchester incase location is not found
function errorLocation(){
    setupMap([-2.24, 53.48]);
}

//center is array that is our longitude and latitude
function setupMap(center){
    //creates street views on the map//
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 13
    });

    //adds zoom and rotate control functionality for the map
    map.addControl(new mapboxgl.NavigationControl());

    // adds the geolocater search function position at the top left of the map
    // map.addControl(
    //     new MapboxGeocoder({
    //     accessToken: mapboxgl.accessToken,
    //     mapboxgl: mapboxgl
    //     }),'top-left');  

    map.addControl(
        new MapboxDirections({
        accessToken: mapboxgl.accessToken
        }), 'top-left');
}
