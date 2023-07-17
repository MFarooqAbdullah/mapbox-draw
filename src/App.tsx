import { Map } from 'react-map-gl';

import { clusterLayer, fieldShapeLayer, unclusteredPointLayer } from './layers';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import { Draw } from './Draw';

const MAPBOX_TOKEN =
  'pk.eyJ1Ijoiam9lbGRhcm9zIiwiYSI6ImNsM2luaG11ZTB1MHUzY3VtbmNubjFsYWcifQ.rlF1mn9KhZhHyzTAnpxleQ'; // Set your mapbox token here

export default function App() {
  return (
    <>
      <Map
        style={{ width: '100vw', height: '100vh' }}
        initialViewState={{
          latitude: 40.67,
          longitude: -103.59,
          zoom: 3,
        }}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        
      >
        <Draw />
      </Map>
    </>
  );
}
