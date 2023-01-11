import React, { useState } from "react";
import Map, { ViewStateChangeEvent, Marker } from "react-map-gl";
import { MapBoxApi, MapBoxCustomStyle } from "../uri";

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
    <Map
      initialViewState={{ ...viewState, zoom: 13 }}
      mapboxAccessToken={MapBoxApi}
      style={{ width: "100%", height: "calc(100vh - 85px)" }}
      mapStyle={MapBoxCustomStyle}
      onMove={onMove}
    >
      <Marker latitude={28.65195} longitude={77.23148} color="red" />
    </Map>
  );
};

export default React.memo(MapComponent);
