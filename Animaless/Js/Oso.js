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
    center: [-73.12704248755561, 0.36107110670577924],
    zoom: 5,
   });
  
  
   // FeatureLayer mapa
  
  const layer = new FeatureLayer({
   url: "https://services.arcgis.com/8DAUcrpQcpyLMznu/arcgis/rest/services/OsoDeAnteojos_WFL1/FeatureServer/1"
  });
  map.add(layer);
  
  
  // Popap
  
  var template = {
  
    title: "{Nomb}",
    content: [{
     type: "text",
     },
  
      {
        type: "fields",
        fieldInfos: [
  
          {
            fieldName: "Nombre_cientifi",
            label: "Nombre Científico:"
          },
  
          {
            fieldName: "Habit",
            label: "Hábitat:"
          },
  
          {
            fieldName: "Alimentacion",
            label: "Alimentación:"
          },

          {
            fieldName: "Peligro",
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
            fieldName: "Referencia",
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
  