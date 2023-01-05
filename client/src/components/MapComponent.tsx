import React, { useState } from "react";
import Map, { ViewStateChangeEvent, Marker } from "react-map-gl";
import { MapBoxApi, MapBoxStreetStyle } from "../uri";

type ViewStateType = {
  longitude: number;
  latitude: number;
};

const MapComponent: React.FC = (): JSX.Element => {
  const [viewState, setViewState] = useState<ViewStateType>({
    longitude: 77.23148,
    latitude: 28.65195,
  });

  const onMove = (e: ViewStateChangeEvent) => {
    setViewState(e.viewState);
  };

  return (
    <div>
      <Map
        initialViewState={{ ...viewState, zoom: 12 }}
        mapboxAccessToken={MapBoxApi}
        style={{ width: "100%", height: "calc(100vh - 98px)" }}
        mapStyle={MapBoxStreetStyle}
        onMove={onMove}
      >
        <Marker latitude={28.65195} longitude={77.23148} color="red" />
      </Map>
    </div>
  );
};

export default React.memo(MapComponent);
