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
  center: [-91.3833300, 14.3333300],
  zoom: 3,
 });


 // FeatureLayer mapa

const layer = new FeatureLayer({
 url: "https://services.arcgis.com/8DAUcrpQcpyLMznu/arcgis/rest/services/TortugaGolfina_WFL1/FeatureServer/1"
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
          fieldName: "Nombre_Científico",
          label: "Nombre Científico:"
        },

        {
          fieldName: "Habitat",
          label: "Hábitat:"
        },

        {
          fieldName: "Peligro_Extinción",
          label: "Peligro de Extinción:"
        },

        {
          fieldName: "Alimentacion",
          label: "Alimentación:"
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
