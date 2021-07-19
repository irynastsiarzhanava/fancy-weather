mapboxgl.accessToken = 'pk.eyJ1IjoidmVyYXNpYXZrYSIsImEiOiJja3Fqc2I5bTMwaWdxMndwcW14eWo2azY0In0.wB2BrV0hfUKqD3hgs9rLog';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-79.4512, 43.6568],
  zoom: 8,
});

/* Given a query in the form "lng, lat" or "lat, lng"
   * returns the matching geographic coordinate(s)
   * as search results in carmen geojson format,
   * https://github.com/mapbox/carmen/blob/master/carmen-geojson.md */

var coordinatesGeocoder = function (query) {
  // Match anything which looks like
  // decimal degrees coordinate pair.
  var matches = query.match(
      /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
  );
  if (!matches) {
      return null;
  }

  function coordinateFeature(lng, lat) {
      return {
          center: [lng, lat],
          geometry: {
              type: 'Point',
              coordinates: [lng, lat]
          },
          place_name: 'Lat: ' + lat + ' Lng: ' + lng,
          place_type: ['coordinate'],
          properties: {},
          type: 'Feature'
      };
  }

  var coord1 = Number(matches[1]);
  var coord2 = Number(matches[2]);
  var geocodes = [];

  if (coord1 < -90 || coord1 > 90) {
      // must be lng, lat
      geocodes.push(coordinateFeature(coord1, coord2));
  }

  if (coord2 < -90 || coord2 > 90) {
      // must be lat, lng
      geocodes.push(coordinateFeature(coord2, coord1));
  }

  if (geocodes.length === 0) {
      // else could be either lng, lat or lat, lng
      geocodes.push(coordinateFeature(coord1, coord2));
      geocodes.push(coordinateFeature(coord2, coord1));
  }

  return geocodes;
  };

  // Add the control to the map.
  map.addControl(
      new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          localGeocoder: coordinatesGeocoder,
          zoom: 4,
          placeholder: 'Try: -40, 170',
          mapboxgl: mapboxgl
      })
  );