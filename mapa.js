let map = L.map('map'). setView([-1.831239, -78.183406],6)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords, 10);
})

var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});

var minimap = new L.Control.MiniMap(carto_light,
    {
        toggleDisplay : true,
        minimized: false,
        position: "bottomleft"
    }).addTo(map);

 new L.control.scale({imperial: false}).addTo(map)

 function popup(feature, layer){
    if(feature.properties && feature.properties.Nombre){
        layer.bindPopup("<strong>Nombre: </strong>" + feature.properties.Nombre + "<br/>" + "<strong>Categoría: </strong>" + feature.properties.Categoría + "<br/>" + "<strong>Registro: </strong>" + feature.properties.Registro);
    }
 }

 L.geoJson(poligonos).addTo(map);

 var nombreJS = L.geoJson(poligonos,{
    onEachFeature: popup
 }).addTo(map);











