import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();

  mapboxgl.accessToken =
    "pk.eyJ1IjoiemVraXllIiwiYSI6ImNrZXNlNTQ2ZTNhdTIyeW5wYjhpcWR5OHAifQ.xvDhG3GwcfC6QL_yWjKr5Q";

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/mapbox/streets-v11",
      center: props.center,
      zoom: props.zoom,
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    // clean up on unmount
    return () => map.remove();
  }, []);


  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
