// Requiriendo datos de Esri 

require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/PopupTemplate",
  ], function(Map, MapView,FeatureLayer, popupTemplate,) {
  
  // Base map
  
  var map = new Map({
    basemap: "topo-vector"
  });
  
  
  // Contenedor de mapa
  
  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-62.326745,-1.480073],
    zoom: 5,
   });
  
  
   // FeatureLayer mapa
  
  const layer = new FeatureLayer({
   url: "https://services.arcgis.com/8DAUcrpQcpyLMznu/arcgis/rest/services/DelfinRosado_WFL1/FeatureServer/1"
  });
  map.add(layer);
  
  
  // Popap
  
  var template = {
  
    title: "{Nombre}",
    content: [{
     type: "text",
     },
  
      {
        type: "fields",
        fieldInfos: [
  
          {
            fieldName: "Nombre_Cientific",
            label: "Nombre Científico:"
          },
  
          {
            fieldName: "Habitat",
            label: "Hábitat:"
          },
  
          {
            fieldName: "Alimentacion",
            label: "Alimentación:"
          },
  
          {
            fieldName: "Peligro_Extrincio",
            label: "Peligro de Extinción:"
          },

        ]
      },
      {
        type: "media",
        mediaInfos: [
          {
            type: "image",
              caption: "",
            value: {
              sourceURL:"{imagen}"
            }
          },
        ]
      },
  
      {
        type:"fields",
        fieldInfos:[
          {
            fieldName: "Refe",
            label: "Referencia:",
            format: {
              digitSeparator: true,
              places: 0
            }
          },
        ]
      },
  
    ]
  
    
  }
  
  layer.popupTemplate = template;
  
  
  });
  