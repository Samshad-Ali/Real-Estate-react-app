import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const SmallMap = () => {
  return (
    <div className="w-full flex flex-col gap-2">
    <p className="font-semibold text-sm">Location</p>
    <div className="w-full h-full z-0">
      <MapContainer
        className=" h-[100px] rounded-md"
        center={[51.505, -0.09]}
        zoom={7}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
        Best estate web. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  </div>
  )
}

export default SmallMap