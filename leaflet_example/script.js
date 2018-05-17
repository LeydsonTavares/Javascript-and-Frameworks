var mymap = L.map('map').setView([-7.0973411, -34.8338834], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    atribution: '@ <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var popup = L.popup()
.setLatLng(latlng)
.setContent('<p>Hello world!<br />This is a nice popup.</p>')
.openOn(map);

var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
    layers: 'nexrad-n0r-900913',
    format: 'image/png',
    attribution: "Weather data © 2012 IEM Nexrad"
}).addTo(mymap);