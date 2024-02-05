require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "dojo/domReady!"
], function (Map, MapView, FeatureLayer) {
  /************************************************************
   * Creates a new WebMap instance. A WebMap must reference
   * a PortalItem ID that represents a WebMap saved to
   * arcgis.com or an on-premise portal.
   *
   * To load a WebMap from an on-premise portal, set the portal
   * url with esriConfig.portalUrl.
   ************************************************************/
  const symbol = {
    type: "simple-marker",
    color: "red",
    size: 4
  };

  const renderer = {
    type: "simple",
    symbol: symbol
  };

  const template = {
    content: "{CollisnTyp} collision",
    title: "What Happened?",
    // type:"fields",
    fieldInfos: [
      {
        fieldName: "CollisnTyp",
        label: "Collision Type",
        visible: true
      }
    ]
  };

  const fl = new FeatureLayer({
    url:
      "https://services2.arcgis.com/zNjnZafDYCAJAbN0/arcgis/rest/services/Traffic_Collisions/FeatureServer/0",
    renderer: renderer,
    outFields: ["*"],
    popupTemplate: template
  });

  /************************************************************
   * Set the WebMap instance to the map property in a MapView.
   ************************************************************/
  var map = new Map({
    basemap: "streets"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    extent: {
      // autocasts as new Extent()
      // xmin: -118.264858634618,
      // ymin: 33.5444932701483,
      // xmax: -117.299011374275,
      // ymax: 35.0054716855699,
      xmin: -118.19876123,
      ymin: 34.1981025,
      xmax: -118.05517288,
      ymax: 34.11379905,
      spatialReference: 4326
    }
  });

  map.add(fl);
});
