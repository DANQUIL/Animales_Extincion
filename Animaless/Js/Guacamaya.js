// Requiriendo datos de Esri 

require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/PopupTemplate",
  ], function(Map, MapView,FeatureLayer, popupTemplate, ) {
  
  // Base map
  
  var map = new Map({
    basemap: "topo-vector"
  });
  
  
  // Contenedor de mapa
  
  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-62.326745,-1.480073],
    zoom: 4,
   });
  
  
   // FeatureLayer mapa
  
   var trailheadsLayer = new FeatureLayer({
    url: "https://services.arcgis.com/8DAUcrpQcpyLMznu/arcgis/rest/services/GuacamayaDorada_WFL1/FeatureServer/0"
  });

  map.add(trailheadsLayer);
  
  var trailsLayer = new FeatureLayer({
    url: "https://services.arcgis.com/8DAUcrpQcpyLMznu/arcgis/rest/services/GuacamayaDorada_WFL1/FeatureServer/1"
  });

  map.add(trailsLayer, 0);

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
            fieldName: "Nombre_Cienti",
            label: "Nombre Científico:"
          },
  
          {
            fieldName: "Habitat",
            label: "Hábitat:"
          },
  
          {
            fieldName: "Alimentación",
            label: "Alimentación:"
          },
  
          {
            fieldName: "Peligro_Extincion",
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
  
  trailsLayer.popupTemplate = template;
  
  
  });
  