import React, { useState } from 'react'
import ReactMapGL ,{Marker,Popup}from 'react-map-gl';
import getCenter from "geolib/es/getCenter";
function Map({searchResults}){


const [selectedLocation, setSelectedLocation] = useState({});
    

    // Transform the search results object into the {latitude :52.516272 and,
    //longitude : 13.3777722} object
    const coordinates = searchResults.map(result => ({
      longitude: result.long,
      latitude: result.lat,
    }));
    //The latitude and longitude of the centerof the map
    const center = getCenter(coordinates);

    const [viewport,setViewport] = useState({
      width: '100%',
      height: '100%',
      latitude: center.latitude,
      longitude: center.longitude,
      zoom:11, 
  });
  console.log(selectedLocation);
  return (
   <ReactMapGL
    mapStyle='mapbox://styles/vista123/cldry3kbu000g01mlpyt6fcsi'
    mapboxAccessToken={process.env.mapbox_key}
    {...viewport}
    onViewportChange={(nextViewport) => setViewport(nextViewport)}
  >
    {searchResults.map(result => (
      <div key ={result.long}>
          <Marker
            longitude= {result.long}
            latitude = {result.lat}
            offsetLeft ={-20}
            offsetTop={-10}
          >
          <p 
            role='img'
            onClick={()=> setSelectedLocation(result)}
            className='cursor-pointer text-2xl animate-bounce'
            aria-label='push-pin'
            >
              📌
            </p>
          </Marker>

          {/*the popup should show if we click on the Marker */}
          {selectedLocation.long === result.long ? (
            <Popup
            onClose={() => setSelectedLocation({})}
            closeOnClick={true}
            latitude={result.lat}
            longitude={result.long}
            >
              {result.title}
            </Popup>
          ):(
            false
          )}
      </div>
    ))}
  </ReactMapGL>
    );
}

export default Map