import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 24.598546,
        longitude: 90.463539,
        width: '100vw',
        height: '100vh',
        zoom: 10
        
})

  return (
    <div className='map-section'>
        <ReactMapGL
            {...viewport} 
            mapboxAccessToken="pk.eyJ1Ijoic2FkaWYxMDAiLCJhIjoiY2wxNTZpd2c4MDM5eTNpczEydmw3a2VqMiJ9.8dyxt6JAr7lAeii-Xqswww"    
            mapStyle="mapbox://styles/mapbox/streets-v9"     
            onDrag= {(viewport) => {
                setViewport(viewport);
            }}
        >
            Markers Here
        </ReactMapGL>
    </div>
  )
}

export default Map;