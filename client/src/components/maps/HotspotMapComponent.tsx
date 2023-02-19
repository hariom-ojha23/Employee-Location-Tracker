import { Paper } from "@mui/material";
import React, { useState } from "react";
import Map, { ViewStateChangeEvent, Marker, MapLayerMouseEvent,  } from "react-map-gl";
import { HotspotType } from "../../types";
import { MapBoxApi, MapBoxCustomStyle } from "../../uri";

type ViewStateType = {
  longitude: number;
  latitude: number;
};

type Props = {
  height: string;
  data: Array<HotspotType>
};

const HotspotMapComponent = (props: Props): JSX.Element => {
  const [viewState, setViewState] = useState<ViewStateType>({
    longitude: 77.23148,
    latitude: 28.65195,
  });

  const onMove = (e: ViewStateChangeEvent) => {
    setViewState(e.viewState);
  };

  return (
    <Map
      initialViewState={{ ...viewState, zoom: 10 }}
      mapboxAccessToken={MapBoxApi}
      style={{ width: "100%", height: props.height }}
      mapStyle={MapBoxCustomStyle}
      onMove={onMove}
    >
      {
        props.data.map((hotspot: HotspotType, index: number) => (
          <>
          <Marker 
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} 
            latitude={hotspot.location.latitude} longitude={hotspot.location.longitude}
            anchor="bottom"
          >
            <Paper sx={{py: 0.6, px: 1.5, borderRadius: '5px', mb: 1, fontSize: 13}}>{hotspot.hotspotname}</Paper>
            <img style={{width: '28px'}} src={process.env.PUBLIC_URL + '/image/pin.png'} />
          </Marker>
          </>
        ))
      }
    </Map>
  );
};

export default React.memo(HotspotMapComponent);
