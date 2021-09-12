import "../styles/css/customMap.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useEffect } from "react";
import "leaflet-geosearch/assets/css/leaflet.css";
import L from 'leaflet';

const SearchField = (props) => {
  const provider = new OpenStreetMapProvider();
  // @ts-ignore
  const searchControl = new GeoSearchControl({
    provider: provider,
    searchLabel: "Digite o endereço:",
    style: "bar",
    marker: {
      draggable: true
    }
  });
  const marker = L.marker(props.coordinates, { draggable: true });
  const map = useMap();
  function handleResult(result) {
    marker.remove();
    if (result.type === "geosearch/marker/dragend") {
      props.setState([result.location.lng, result.location.lat]);
    } else {
      props.setState([result.location.x, result.location.y]);
    }
  }

  marker.on("dragend", (e) => {
    const coordinates = e.target.getLatLng();
    props.setState([coordinates.lat, coordinates.lng]);
  });

  map.on("geosearch/showlocation", handleResult);
  map.on("geosearch/marker/dragend", handleResult);

  useEffect(() => {
    map.addControl(searchControl);
    marker.addTo(map);
    return () => map.removeControl(searchControl);
  }, []);

  return null;
};

function CustomMap(props) {
  const coordinates = [props.coordinates[1], props.coordinates[0]];
  return (
    <div>
      <MapContainer
        className="map-container"
        center={coordinates}
        zoom={13}
        scrollWheelZoom={false}
      >
        {
          <SearchField
            coordinates={coordinates}
            state={props.state}
            setState={props.setState}
          />
        }
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default CustomMap;
