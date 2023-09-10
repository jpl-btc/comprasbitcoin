//Begining of App.answer.js file//

import React, { useEffect, useRef } from "react";
import L from "leaflet";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./assets/stylesheets/App.css";

import Layout from "./components/Layout";

import locations from "./data/locations";
import utensilsIcon from "./assets/shared/utensils-marker.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const MAPBOX_API_KEY = process.env.REACT_APP_MAPBOX_API_KEY;
const MAPBOX_USERID = process.env.REACT_APP_MAPBOX_USERID;
const MAPBOX_STYLEID = process.env.REACT_APP_MAPBOX_STYLEID;

function App() {
  const mapRef = useRef();

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
          delivery,
          deliveryRadius,
          tags,
          phone,
          website,
        } = properties;
        const { coordinates } = geometry;

        let deliveryZoneCircle;

        if (deliveryRadius) {
          deliveryZoneCircle = L.circle(coordinates.reverse(), {
            radius: deliveryRadius,
          });
        }

        const popup = L.popup();

        const html = `
          <div class="restaurant-popup">
            <h3>${name}</h3>
            <ul>
              <li>
                ${tags.join(", ")}
              </li>
              <li>
                <strong>¿Se encontraron microplásticos?:</strong> ${
                  delivery ? "Sí" : "No"
                }
              </li>
              <li>
                <strong>Promedio de voluntarios:</strong> ${phone}
              </li>
              <li>
                <strong>Organizador:</strong> <a href="${website}">${website}</a>
              </li>
            </ul>
          </div>
        `;

        popup.setContent(html);

        layer.bindPopup(popup);

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
      },
    });

    geoJson.addTo(map);
  }, [mapRef]);

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    if (!map) return;

    map.on("locationfound", handleOnLocationFound);

    return () => {
      map.off("locationfound", handleOnLocationFound);
    };
  }, [mapRef]);

  function handleOnLocationFound(event) {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    const latlng = event.latlng;

    const marker = L.marker(latlng);

    marker.addTo(map);

    const radius = event.accuracy;

    const circle = L.circle(latlng, {
      radius,
      color: "#26c6da",
    });

    circle.addTo(map);
  }

  function handleOnFindLocation() {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    map.locate({
      setView: true,
    });
  }

  function handleOnSetLocation() {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    const locationNationalGeographic = [38.90563, -77.037];

    const marker = L.marker(locationNationalGeographic);

    marker.addTo(map);
    map.setView(locationNationalGeographic);
  }

  return (
    <Layout>
      <div className="search-actions">
        <ul>
          <li>
            <button onClick={handleOnSetLocation}>
              Mapa 2: Cada uno de los muestreos
            </button>
          </li>

          <li>
            <button onClick={handleOnFindLocation}>Find My Location</button>
          </li>
        </ul>
      </div>
      <Map ref={mapRef} center={[38.907132, -77.036546]} zoom={12}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        />
      </Map>
    </Layout>
  );
}

export default App;

//End of App.answer.js file//
