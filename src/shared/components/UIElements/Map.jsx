import React, { useRef, useEffect } from "react";

import { Map as olMap } from "ol";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";

import "./Map.scss";

const Map = (props) => {
  const ref = useRef();
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    if (ref.current && !mapRef.current) {
      mapRef.current = new olMap({
        target: ref.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat([center.lng, center.lat]),
          zoom: zoom,
        }),
      });
    }
  }, [center, zoom, ref, mapRef]);

  return (
    <div
      ref={ref}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
};

export default Map;
