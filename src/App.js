//Begining of App.js file//

import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./assets/stylesheets/App.css";
import "leaflet-sidebar/src/L.Control.Sidebar.css";
import "leaflet-sidebar";

import Layout from "./components/Layout";

import locations from "./data/locations";
import utensilsIcon from "./assets/shared/btcPointer.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

function App() {
  const mapRef = useRef();
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    if (!map) return;

    let sidebar = L.control.sidebar("sidebar").addTo(map);

    map.eachLayer((layer = {}) => {
      const { options } = layer;
      const { name } = options;

      if (name !== "Mapbox") {
        map.removeLayer(layer);
      }
    });

    const geoJson = new L.GeoJSON(locations, {
      pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
          icon: new L.Icon({
            iconUrl: utensilsIcon,
            iconSize: [26, 26],
            popupAnchor: [0, -15],
            shadowUrl: markerShadow,
            shadowAnchor: [13, 28],
          }),
        });
      },
      onEachFeature: (feature = {}, layer) => {
        const { properties = {}, geometry = {} } = feature;
        const {
          name,
          Bitcoin,
          LN,
          Poligon,
          Otras,
          deliveryRadius,
        } = properties;
        const { coordinates } = geometry;

        let deliveryZoneCircle;

        if (deliveryRadius) {
          deliveryZoneCircle = L.circle(coordinates.reverse(), {
            radius: deliveryRadius,
            color: "deeppurple",
          });
        }

        layer.on("mouseover", () => {
          if (deliveryZoneCircle) {
            deliveryZoneCircle.addTo(map);
          }
        });

        layer.on("mouseout", () => {
          if (deliveryZoneCircle) {
            deliveryZoneCircle.removeFrom(map);
          }
        });

        layer.on("click", () => {
          if (selectedPlace === name) {
            // If the clicked place is the same as the currently selected place
            setSelectedPlace(null); // Clear the selected place
          } else {
            // If the clicked place is different from the currently selected place
            setSelectedPlace(name);
            if (!sidebar.isVisible()) {
              // Check if the sidebar is not visible
              sidebar.show(); // Show the sidebar
            }
            setSelectedData({
              name,
              Bitcoin,
              LN,
              Poligon,
              Otras,
            });
          }
        });
      },
    });

    geoJson.addTo(map);
  }, [mapRef]);

  return (
    <Layout>
      <div className="search-actions"></div>
      <Map ref={mapRef} center={[-34.57, -58.43]} zoom={14}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        />
      </Map>
      <div id="sidebar">
        <h3>Información del negocio</h3>
        <div className="sidebar-content">
          {selectedData && (
            <>
              <h1>{selectedData.name}</h1>
              <h2>Bitcoin: {selectedData.Bitcoin}</h2>
              <h2>LN: {selectedData.LN}</h2>
              <h2>Poligon: {selectedData.Poligon}</h2>
              <h2>Otras: {selectedData.Otras}</h2>
            </>
          )}
        </div>
        <div className="sidebar-footer">
          <h5>Más datos próximamente...</h5>
        </div>
      </div>
      {selectedPlace && (
        <div className="info-box">
          <button
            onClick={() => {
              setSelectedPlace(null);
              setIsSidebarVisible(false);
            }}
          >
            Close
          </button>
          <h1>{selectedPlace}</h1>
        </div>
      )}
    </Layout>
  );
}

export default App;

//End of App.js file//
