import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";

export const Map = () => {
  return (
    <>
      {" "}
      <h2 className="title-style-1">
        Our Location <span className="title-under" />
      </h2>
      <div className="f">
        <MapContainer
          className="h"
          center={[23.741193, 90.382450]}
          zoom={14}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[23.741193, 90.382450]}>
            <Popup>{"Dhanmondi NCLC/IDB/58"}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};
