// Definir puntos de ejemplo en Reynosa
let dummyList = [
    // 🚗 Rutas para autos
    {title: "Boulevard Morelos", dots: [[26.0923, -98.2770], [26.0850, -98.2900]], type: "car", lineConfig: {color: 'blue', opacity: 0.7, weight: 5}, icon: ''},
    {title: "Carretera a Monterrey", dots: [[26.0923, -98.2770],[26.1200, -98.2500]], type: "car", lineConfig: {color: 'blue', opacity: 0.7, weight: 5}, icon: ''},

    // 🚛 Rutas para transporte pesado
    {title: "Acceso Puente Pharr", dots: [[26.0700, -98.3000],[26.0400, -98.3200]], type: "truck", lineConfig: {color: 'skyblue', opacity: 0.7, weight: 5}, icon: ''},
    {title: "Corredor Industrial Reynosa", dots: [[26.1200, -98.2800],[26.1500, -98.2600]], type: "truck", lineConfig: {color: 'skyblue', opacity: 0.7, weight: 5}, icon: ''},

    // 🚆 Rutas de tren (vía ferroviaria de Reynosa)
    {title: "Vía Reynosa - Matamoros", dots: [[26.0500, -98.3000],[26.0000, -98.3500]], type: "train", lineConfig: {color: 'brown', opacity: 0.7, weight: 5}, icon: ''},
    {title: "Vía Reynosa - Monterrey", dots: [[26.1100, -98.2500],[26.1800, -98.2200]], type: "train", lineConfig: {color: 'brown', opacity: 0.7, weight: 5}, icon: ''},

    // ✈ Rutas de vuelos desde el Aeropuerto Internacional de Reynosa
    {title: "Vuelo a Ciudad de México", dots: [[26.0080, -98.2300], [19.4361, -99.0719]], type: "airplane", lineConfig: {color: 'purple', opacity: 0.7, weight: 5}, icon: ''},
    {title: "Vuelo a Guadalajara", dots: [[26.0080, -98.2300], [20.6668, -103.3918]], type: "airplane", lineConfig: {color: 'purple', opacity: 0.7, weight: 5}, icon: ''},
    {title: "Vuelo a Cancún", dots: [[26.0080, -98.2300], [21.1619, -86.8515]], type: "airplane", lineConfig: {color: 'purple', opacity: 0.7, weight: 5}, icon: ''},
    {title: "Vuelo a Veracruz", dots: [[26.0080, -98.2300], [19.1738, -96.1342]], type: "airplane", lineConfig: {color: 'purple', opacity: 0.7, weight: 5}, icon: ''},
    {title: "Vuelo a Ciudad de México (AIFA)", dots: [[26.0080, -98.2300], [19.5944, -99.2276]], type: "airplane", lineConfig: {color: 'purple', opacity: 0.7, weight: 5}, icon: ''},

    // 🚢 Rutas marítimas (considerando conexión al puerto más cercano, como Matamoros o Tampico)
    {title: "Transporte a Puerto Matamoros", dots: [[26.0000, -98.3500],[25.8627, -97.5080]], type: "ship", lineConfig: {color: 'navy', opacity: 0.7, weight: 5}, icon: ''},
    {title: "Transporte a Puerto Tampico", dots: [[26.0000, -98.3500],[22.2553, -97.8400]], type: "ship", lineConfig: {color: 'navy', opacity: 0.7, weight: 5}, icon: ''}
];
console.log('%cApplying Configuration to Leaflet Map', 'background: cyan; color: black; padding: 4px;')
// Crear capas base
let baseLayers = {
    "Mapa Estándar": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }),
    "Modo Oscuro": L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
    }),
    "Vista Satelital": L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: '&copy; Google Maps'
    })
};

let arrayAllowedRoutes = ["car", "truck"], arrayAllowedPolylines = ["ship", "airplane"];
let informationList = []    // Almacena la información general de las rutas del mapa
let mapLayers = []          // Almacena las rutas existentes en el mapa
let tempPoints = [];        // Almacena los puntos seleccionados
let tempMarkers = [];       // Almacena los marcadores temporales
let drawingMode = false;    // Controla si se pueden agregar puntos
function initializeMap() {
    
    // Inicializar el mapa centrado en Reynosa, México
    var map = L.map('map', {
        center: [26.0080, -98.2300], // Coordenadas de Reynosa
        zoom: 12,
        layers: [baseLayers["Mapa Estándar"]] // Capa inicial
    }).setView([26.0923, -98.2770], 13);
    
    // Agregar control de capas
    L.control.layers(baseLayers).addTo(map);
    
    var LeafIcon = L.Icon.extend({
        options: {
            iconSize: [94, 69],  // Tamaño original
            iconAnchor: [47, 69],  // La mitad del ancho, altura total
            popupAnchor: [0, -69],  // Arriba del ícono
        }
    });
    var greenIcon   =   new LeafIcon({iconUrl: 'public/multimedia/pin/marker-greenn.png'}),
    redIcon         =   new LeafIcon({iconUrl: 'public/multimedia/pin/marker-redd.png'}),
    purpleIcon      =   new LeafIcon({iconUrl: 'public/multimedia/pin/marker-purplee.png'}),
    cyanIcon        =   new LeafIcon({iconUrl: 'public/multimedia/pin/marker-cyann.png'}),
    orangeIcon      =   new LeafIcon({iconUrl: 'public/multimedia/pin/marker-orangee.png'});
    
    // Agregar capa de mapa base
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors and Enrique Galván'
    }).addTo(map);
    
    function addRoute(base = {title, dots: [], type, lineConfig: {color: 'blue', opacity: 0.7, weight: 5}}) {
        let routeControl;
        switch (base.type) {
            case "car":
            case "truck":
                // Agregar la ruta al mapa
                routeControl = L.Routing.control({
                    waypoints: [base.dots[0], base.dots[1]],
                    routeWhileDragging: false,
                    router: L.Routing.osrmv1({
                        language: 'es',  // Configurar idioma a español
                        serviceUrl: 'https://router.project-osrm.org/route/v1'
                    }),
                    createMarker: function(i, waypoint, n) {
                        
                        var marker = L.marker(waypoint.latLng, {
                            icon: base.type == "car" ? redIcon : purpleIcon,
                            draggable: true
                        });
                        return marker.bindPopup(i === 0 ? "Origen" : "Destino");
                    },
                    lineOptions: {
                        styles: [base.lineConfig]
                    }
                }).addTo(map);
                obtainInfoFromRoutes(base, routeControl)
                
                mapLayers.push(routeControl)
            break;
    
            case "ship":
            case "airplane":
                // ✈ 🚢 Para aviones y barcos → Usar línea recta (polyline)
                // Definir el icono personalizado fuera de la función para reutilizarlo
    
                let polyline = L.polyline(base.dots, {
                    color: base.lineConfig.color,
                    opacity: base.lineConfig.opacity,
                    weight: base.lineConfig.weight,
                    dashArray: "5, 10" // Línea punteada para indicar ruta aérea, marítima o trenes
                }).addTo(map);
                obtainInfoFromRoutes(base, polyline)
                
                mapLayers.push(polyline)
            break;
        }
    }
    
    // Función para limpiar el mapa
    function cleanMap(type) {
        console.log("Eliminando rutas del tipo:", type);
        
        // Eliminar rutas del mapa (tanto OSRM como polylines)
        mapLayers = mapLayers.filter(layer => {
            let isOSRMLayer = layer._routes?.[0]?.name;
            let isPolyline = layer instanceof L.Polyline; // Detectar si es una polyline
    
            let match = informationList.some(itemList => 
                itemList.type === type && 
                (isOSRMLayer ? layer._routes[0].name === itemList.originalDescription : isPolyline)
            );
    
            if (match) {
                if (isOSRMLayer) {
                    map.removeControl(layer); // Eliminar rutas OSRM
                } else {
                    map.removeLayer(layer); // Eliminar polylines (airplane, ship)
                }
            }
    
            return !match; // Mantener solo las rutas que NO coincidan
        });
    
        // Eliminar elementos coincidentes en informationList
        informationList = informationList.filter(item => item.type !== type);
    
        console.log("Rutas eliminadas correctamente.");
    }
    
    function setMarksByType(type) {
        hideControlsMenu()
        dummyList.filter(item => item.type === type).forEach(route => {
            console.log(type + ' route added')
            addRoute(route)
        }); 
        hideDefaultInfo()
    }
    
    function hideDefaultInfo() {
        //Ocultar rutas pero no la selección de mapa
        let divs = document.querySelectorAll('.leaflet-routing-container')
        console.log(divs)
        divs.forEach(infoTab => {
            infoTab.classList.add('d-none')
        });
    }
    
    function obtainInfoFromRoutes(base, routeControl) {
        if (arrayAllowedRoutes.includes(base.type)) {
            // 🛣 Para rutas terrestres (OSRM)
            routeControl.on("routesfound", function(event) {
                let route = event.routes[0]; // Tomar la primera ruta encontrada
                informationList.push({
                    title: base.title ? base.title : "NA",
                    originalDescription: route.name,
                    type: base.type,
                    description: route.name.split(',').join(" con destino a")
                });
    
                console.log("Ruta agregada:", base.title, "Descripción:", route.name);
            });
    
        } else if (arrayAllowedPolylines.includes(base.type)) {
            // ✈ 🚢 Para rutas de aviones y barcos (líneas rectas con polyline)
            let description = `Ruta directa de ${base.title} (${base.origin} → ${base.destiny})`;
            
            informationList.push({
                title: base.title ? base.title : "NA",
                originalDescription: description,
                type: base.type,
                description: description
            });
    
            console.log("Ruta agregada:", base.title, "Descripción:", description);
        }
    }
    
    document.querySelectorAll('.side-menu li a').forEach(a => {
        a.addEventListener('click', function () {  
            let type = a.querySelector('p').innerText.toLowerCase()
            if (!a.classList.contains('active')) {
                cleanMap(type)
            }
            else{
                setMarksByType(type)
                hideDefaultInfo()
            }
        })
    });
    document.querySelectorAll('.map-controls').forEach(btn => {
        btn.addEventListener('click', function () {  
            if (this.classList.contains('startAddingPoints')) {
                startAddingPoints(this)
            }
            else if (this.classList.contains('finishDrawing')){
                finishDrawing()
            }
            else if (this.classList.contains('cancelCoordsCapture')){
                cancelCoordsCapture()
            }
        })
    });
    // Función para activar la selección de puntos
    function startAddingPoints(btn) {
        btn.closest('.offcanvas').querySelector('.btn-close').click()
        showControlsMenu()
        drawingMode = true;
        tempPoints = [];  // Reiniciar puntos
        tempMarkers.forEach(marker => map.removeLayer(marker)); // Limpiar marcadores anteriores
        tempMarkers = [];
        console.log("Modo de selección activado: Haz clic en el mapa para agregar puntos.");
    
        map.on("click", addPointToMap);
    }
    
    // Función para agregar puntos al mapa
    function addPointToMap(event) {
        if (!drawingMode) return;
    
        let { lat, lng } = event.latlng;
        tempPoints.push([lat, lng]); // Guardar coordenada
        
        // Agregar marcador visual y almacenarlo
        let marker = L.marker([lat, lng]).addTo(map)
            .bindPopup(`Punto ${tempPoints.length}: (${lat.toFixed(4)}, ${lng.toFixed(4)})`)
            .openPopup();
        tempMarkers.push(marker);
    
        console.log("Punto agregado:", lat, lng);
        if (arrayAllowedRoutes.includes(document.getElementById("type").value) && 
            tempPoints.length == 2) {
            finishDrawing()
        }
    }
    
    // Función para finalizar la selección y trazar la ruta
    function finishDrawing() {
        if (!drawingMode || tempPoints.length < 2) {
            console.log("Debes agregar al menos dos puntos antes de finalizar.");
            return;
        }
        
        hideControlsMenu()        
    
        drawingMode = false; 
        map.off("click", addPointToMap); // Remover evento de clic
    
        // Eliminar marcadores temporales del mapa
        tempMarkers.forEach(marker => map.removeLayer(marker));
        tempMarkers = [];
    
        // Obtener valores del formulario
        let title = document.getElementById("title").value.trim() || "Nueva Ruta";
        let type = document.getElementById("type").value;
        let color = document.getElementById("color").value;
    
        // Crear el nuevo objeto de ruta
        let newRoute = {
            title: title,
            dots: tempPoints,
            type: type,
            lineConfig: { color: color, opacity: 0.7, weight: 5 }
        };
    
        console.log("Nueva ruta creada:", newRoute);
    
        // Enviar el nuevo objeto a addRoute para mostrarlo en el mapa
        dummyList.push(newRoute)
        addRoute(newRoute);
        hideDefaultInfo()
    }
    
    function cancelCoordsCapture(map, markers) {
        hideControlsMenu()
        if (!map || !markers || markers.length === 0) return;
        // Eliminar cada marcador del mapa
        markers.forEach(marker => {
            map.removeLayer(marker);
        });
        
        // Vaciar la lista de marcadores
        markers.length = 0;
        
        console.log("Selección de marcas cancelada y eliminadas del mapa.");
    }
    
    // Función para mover el marcador en la ruta
    function moveMarker(marker, routeCoords, speed) {
        let index = 0;
        
        function animateMarker() {
            if (index < routeCoords.length - 1) {
                let start = routeCoords[index];
                let end = routeCoords[index + 1];
                let steps = 100;  // Cuántos pasos en la animación
                let step = 0;
    
                let interval = setInterval(() => {
                    if (step >= steps) {
                        clearInterval(interval);
                        index++;
                        animateMarker(); // Ir al siguiente punto
                    } else {
                        let lat = start[0] + (end[0] - start[0]) * (step / steps);
                        let lng = start[1] + (end[1] - start[1]) * (step / steps);
                        marker.setLatLng([lat, lng]);
                        step++;
                    }
                }, speed);
            }
        }
        
        animateMarker();
    }
    
    function hideControlsMenu() {
        $('#nomad-layers-menu .controls-submenu').slideUp();
        setTimeout(()=>{
            document.querySelector('#nomad-layers-menu').classList.remove('controls-active')
        },500)  
    }
    function showControlsMenu() {
        document.querySelector('#nomad-layers-menu').classList.add('controls-active')
        setTimeout(()=>{
            $('#nomad-layers-menu .controls-submenu').slideDown();
        },200)
    }
}