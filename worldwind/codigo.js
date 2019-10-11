const wwd = new WorldWind.WorldWindow("tierra");

// Crear y añadir "Capas" al objeto WWD
const layers = [
  // Capas de imagenes.
  { layer: new WorldWind.BMNGLayer(), enabled: true },
  { layer: new WorldWind.BMNGLandsatLayer(), enabled: true },
  { layer: new WorldWind.BingAerialLayer(null), enabled: false },
  { layer: new WorldWind.BingAerialWithLabelsLayer(null), enabled: false },
  { layer: new WorldWind.BingRoadsLayer(null), enabled: false },
  // Capa de atmosfera.
  { layer: new WorldWind.AtmosphereLayer(), enabled: true },
  // WorldWindow UI layers.
  { layer: new WorldWind.CompassLayer(), enabled: false },
  { layer: new WorldWind.CoordinatesDisplayLayer(wwd), enabled: true },
  { layer: new WorldWind.ViewControlsLayer(wwd), enabled: false }
];
// Activar capa por capa del objeto "layers"
layers.forEach(layer => {
  if (layer.enabled) {
    console.log(layer.layer);
    wwd.addLayer(layer.layer);
  }
});

// Descargar datos de NEO (NASA Earth Observations)
const serviceAddress =
  "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

// Retorna una nombre de servicio para capa
const getLayer = layer => {
  switch (layer) {
    case "fire":
      return "MOD14A1_M_FIRE";
    case "temp":
      return "MOD_LSTD_CLIM_M";
    default:
      return undefined;
  }
};

const createLayer = xmlDom => {
  const wms = new WorldWind.WmsCapabilities(xmlDom);
  const wmsLayerCapabilities = wms.getNamedLayer(getLayer("fire"));
  const wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(
    wmsLayerCapabilities
  );
  const wmsLayer = new WorldWind.WmsLayer(wmsConfig);
  wwd.addLayer(wmsLayer);
};

const datosNEO = $.get(serviceAddress)
  .done(createLayer)
  .fail((jqXhr, text, exception) => {
    console.log(
      "Error al descargar el documento de NEO: " +
        text +
        " tipo de excepción: " +
        exception
    );
  });
