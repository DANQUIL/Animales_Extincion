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
    center: [-73.11199364520058, 9.866787714583168],
    zoom: 5,
   });
  
  
   // FeatureLayer mapa
  
  const layer = new FeatureLayer({
   url: "https://services.arcgis.com/8DAUcrpQcpyLMznu/arcgis/rest/services/Manati_WFL1/FeatureServer/0?token=K6TQ6x3900Du-FTTTsB7_YZvHek7EBHwfhtkovUFGHxIkhqJP0P78szODCwCO6z1M02h4A4nBYaqrDUHe1a0mWGEGvVP2kqx6I6Plx2EzUDkTDtQWR8-u5rL-w6OGmmisFm4vq3-ng3hH7QjCfX48vk9L1xV02KOhYFWLf3SyUwR4q1ah9SmQlsnvPZMZJS33KI8dmY85ppAYDhVfCd8SUyB2ar44WJ-mOEH3ypvSuHafDPxuFWpDyiJTSdAUawl"
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
            fieldName: "Nombre_Cien",
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
            fieldName: "Peligro_Extinción",
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
  