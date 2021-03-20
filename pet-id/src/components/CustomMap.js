import '../styles/css/customMap.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function CustomMap() {

    return (
        <div>
            <MapContainer className="map-container" center={[-19.869611, -43.964633]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={[-19.869611, -43.964633]}>
                    <Popup>
                        A pretty CSS3 popup.
                        <br/>
                        Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default CustomMap;