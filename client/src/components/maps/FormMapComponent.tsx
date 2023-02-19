import React, { useState } from "react";
import Map, { ViewStateChangeEvent, Marker, MapLayerMouseEvent } from "react-map-gl";
import { MapBoxApi, MapBoxCustomStyle } from "../../uri";

type ViewStateType = {
  longitude: number;
  latitude: number;
};

type Props = {
  height: string;
  setLocation: (val: MapLayerMouseEvent) => void
};

const FormMapComponent = (props: Props): JSX.Element => {
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
      style={{ width: "100%", height: props.height }}
      mapStyle={MapBoxCustomStyle}
      onMove={onMove}
      onClick={(e) => props.setLocation(e)}
    >
      <Marker latitude={28.65195} longitude={77.23148} color="red" />
    </Map>
  );
};

export default React.memo(FormMapComponent);
