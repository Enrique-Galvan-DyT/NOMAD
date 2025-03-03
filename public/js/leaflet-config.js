// Definir puntos de ejemplo en Reynosa
let dummyList = [
    // 🚗 Rutas para autos
    {title: "Boulevard Morelos", dots: [[26.0923, -98.2770], [26.0850, -98.2900]], type: "car", lineConfig: {color: 'red', opacity: 0.7, weight: 5}, icon: ''},
    {title: "Carretera a Monterrey", dots: [[26.0923, -98.2770],[26.1200, -98.2500]], type: "car", lineConfig: {color: 'red', opacity: 0.7, weight: 5}, icon: ''},

    // 🚛 Rutas para transporte pesado
    {title: "Acceso Puente Pharr", dots: [[26.0700, -98.3000],[26.0400, -98.3200]], type: "truck", lineConfig: {color: 'slateblue', opacity: 0.7, weight: 5}, icon: ''},
    {title: "Corredor Industrial Reynosa", dots: [[26.1200, -98.2800],[26.1500, -98.2600]], type: "truck", lineConfig: {color: 'slateblue', opacity: 0.7, weight: 5}, icon: ''},

    // 🚆 Rutas de tren (vía ferroviaria de Reynosa)
    {title: "Vía Reynosa - Matamoros", dots: [[26.0500, -98.3000],[26.0000, -98.3500]], type: "train", lineConfig: {color: 'brown', opacity: 0.7, weight: 5}, icon: ''},
    {title: "Vía Reynosa - Monterrey", dots: [[26.1100, -98.2500],[26.1800, -98.2200]], type: "train", lineConfig: {color: 'brown', opacity: 0.7, weight: 5}, icon: ''},
    // 🚆 Rutas de tren adicionales
    {title: "Vía Nuevo Laredo - Monterrey", dots: [[27.5000, -99.5167],[26.5000, -99.0000],[35.6866, -110.3161],[25.6866, -100.3161]], type: "train", lineConfig: {color: 'brown', opacity: 0.7, weight: 5}, icon: ''},
    {title: "Vía Piedras Negras - Monclova", dots: [[28.7000, -100.5230],[27.8000, -100.2000],[26.9000, -100.1500]], type: "train", lineConfig: {color: 'brown', opacity: 0.7, weight: 5}, icon: ''},
    {title: "Vía Mexicali - Nogales", dots: [[32.6400, -115.4800],[32.0000, -114.5000],[31.3322, -110.9381]], type: "train", lineConfig: {color: 'brown', opacity: 0.7, weight: 5}, icon: ''},
    {title: "Vía Coatzacoalcos - Mérida", dots: [[18.1500, -94.4167],[18.5000, -91.0000],[19.0000, -89.0000],[20.9671, -89.6237]], type: "train", lineConfig: {color: 'brown', opacity: 0.7, weight: 5}, icon: ''},
    {title: "Vía Tapachula - Ciudad Hidalgo", dots: [[14.9000, -92.2667],[14.6800, -92.1500]], type: "train", lineConfig: {color: 'brown', opacity: 0.7, weight: 5}, icon: ''},


    // ✈ Rutas de vuelos desde el Aeropuerto Internacional de Reynosa
   {title: "Vuelo a Ciudad de México", dots: [[26.0080, -98.2300], [19.4361, -99.0719]], type: "airplane", lineConfig: {color: 'magenta', opacity: 0.7, weight: 5}, icon: ''},
   {title: "Vuelo a Guadalajara", dots: [[26.0080, -98.2300], [20.6668, -103.3918]], type: "airplane", lineConfig: {color: 'magenta', opacity: 0.7, weight: 5}, icon: ''},
   {title: "Vuelo a Cancún", dots: [[26.0080, -98.2300], [21.1619, -86.8515]], type: "airplane", lineConfig: {color: 'magenta', opacity: 0.7, weight: 5}, icon: ''},
   {title: "Vuelo a Veracruz", dots: [[26.0080, -98.2300], [19.1738, -96.1342]], type: "airplane", lineConfig: {color: 'magenta', opacity: 0.7, weight: 5}, icon: ''},
   {title: "Vuelo a Ciudad de México (AIFA)", dots: [[26.0080, -98.2300], [19.5944, -99.2276]], type: "airplane", lineConfig: {color: 'magenta', opacity: 0.7, weight: 5}, icon: ''},
   
   // Nuevas rutas de vuelos desde otros aeropuertos de México
   {title: "Vuelo AICM a Monterrey", dots: [[19.4361, -99.0719], [25.7781, -100.1075]], type: "airplane", lineConfig: {color: 'magenta', opacity: 0.7, weight: 5}, icon: ''},
   {title: "Vuelo AICM a Guadalajara", dots: [[19.4361, -99.0719], [20.5214, -103.3110]], type: "airplane", lineConfig: {color: 'magenta', opacity: 0.7, weight: 5}, icon: ''},
   {title: "Vuelo Guadalajara a Tijuana", dots: [[20.5214, -103.3110], [32.5411, -116.97]], type: "airplane", lineConfig: {color: 'magenta', opacity: 0.7, weight: 5}, icon: ''},
   {title: "Vuelo Cancún a Ciudad de México", dots: [[21.0365, -86.8772], [19.4361, -99.0719]], type: "airplane", lineConfig: {color: 'magenta', opacity: 0.7, weight: 5}, icon: ''},
   {title: "Vuelo Monterrey a Hermosillo", dots: [[25.7781, -100.1075], [29.0959, -111.0074]], type: "airplane", lineConfig: {color: 'magenta', opacity: 0.7, weight: 5}, icon: ''},
   {title: "Vuelo Tijuana a Los Cabos", dots: [[32.5411, -116.97], [23.0721, -109.6333]], type: "airplane", lineConfig: {color: 'magenta', opacity: 0.7, weight: 5}, icon: ''},
   {title: "Vuelo Querétaro a Mérida", dots: [[20.6181, -100.6850], [20.9373, -89.6571]], type: "airplane", lineConfig: {color: 'magenta', opacity: 0.7, weight: 5}, icon: ''},
   {title: "Vuelo Puebla a Toluca", dots: [[19.1325, -98.4490], [19.3373, -99.5512]], type: "airplane", lineConfig: {color: 'magenta', opacity: 0.7, weight: 5}, icon: ''},
   {title: "Vuelo Los Cabos a Puerto Vallarta", dots: [[23.0721, -109.6333], [20.6800, -105.2536]], type: "airplane", lineConfig: {color: 'magenta', opacity: 0.7, weight: 5}, icon: ''},
   {title: "Vuelo Veracruz a Villahermosa", dots: [[19.2288, -96.1342], [17.9889, -92.9444]], type: "airplane", lineConfig: {color: 'magenta', opacity: 0.7, weight: 5}, icon: ''},
   
   
      // 🚢 Rutas marítimas
   // Observa que agregamos más puntos intermedios para dar forma curva
   {title: "Transporte a Puerto Matamoros", dots: [[26.0000, -98.3500],[25.8627, -97.5080]], type: "ship", lineConfig: {color: 'coral', opacity: 0.7, weight: 5}, icon: ''},
   {title: "Transporte a Puerto Tampico", dots: [[26.0000, -98.3500],[22.2553, -97.8400]], type: "ship", lineConfig: {color: 'coral', opacity: 0.7, weight: 5}, icon: ''},

// Nuevas rutas marítimas internacionales que salen de puertos importantes de México
{
    title: "Ruta Veracruz - Miami",
    type: "ship",
    lineConfig: {color: 'coral', opacity: 0.7, weight: 5},
    dots: [
      [19.1830, -96.1342],  // Veracruz
      [19.5, -94.0],        // Punto intermedio 1
      [20.5, -92.0],        // Punto intermedio 2
      [22.0, -90.0],        // Punto intermedio 3
      [25.7617, -80.1918]   // Miami
    ]
  },
  {
    title: "Prueba",
    type: "airplane",
    lineConfig: {color: 'magenta', opacity: 0.7, weight: 5},
    dots: [
        [26.005244836490725, -98.22457353552673],
        [25.677049470354973, -98.97336464015677],
        [25.399338325800198, -100.42297657221035],
        [25.16079013612337, -101.47723979552204],
        [24.242053697138715, -101.609022698436],
        [23.96110319358878, -100.90618054956153],
        [23.920917192110934, -99.72013442333588],
        [23.679539107845432, -98.70979883432884],
        [23.55868230821266, -97.74339087962645],
        [22.709594106445834, -97.21625926797059],
        [22.059104863335293, -97.26018690227525],
        [21.773566260065266, -98.00695668545437],
        [21.610145251004838, -98.79765410293814],
        [21.405609173081366, -99.54442388611729],
        [20.70805583933902, -99.67620678903124],
        [20.25497356771322, -99.324785714594],
        [20.007277313954944, -98.97336464015677],
        [19.469267811156975, -98.79765410293814],
        [19.47683121534571, -98.92105256926568],
        [19.46711540899333, -98.97870758929055],
        [19.459342344575827, -99.03087165502733],
        [19.43278156387136, -99.06999470432989]
    ]
  },
  {
    title: "Ruta Altamira - New Orleans",
    type: "ship",
    lineConfig: {color: 'coral', opacity: 0.7, weight: 5},
    dots: [
      [22.6300, -97.9000],  // Altamira (aprox.)
      [23.5, -96.0],        // Punto intermedio 1
      [25.0, -94.0],        // Punto intermedio 2
      [27.0, -92.5],        // Punto intermedio 3
      [29.9511, -90.0715]   // New Orleans
    ]
  },
  {
    title: "Ruta Manzanillo - Los Angeles",
    type: "ship",
    lineConfig: {color: 'coral', opacity: 0.7, weight: 5},
    dots: [
      [19.0510, -104.3350], // Manzanillo (aprox.)
      [21.0, -106.0],       // Punto intermedio 1
      [24.0, -110.0],       // Punto intermedio 2
      [28.0, -114.0],       // Punto intermedio 3
      [34.0522, -118.2437]   // Los Angeles
    ]
  },
  {
    title: "Ruta Lázaro Cárdenas - Long Beach",
    type: "ship",
    lineConfig: {color: 'coral', opacity: 0.7, weight: 5},
    dots: [
      [17.9000, -102.2000], // Lázaro Cárdenas (aprox.)
      [20.0, -105.0],       // Punto intermedio 1
      [25.0, -110.0],       // Punto intermedio 2
      [30.0, -115.0],       // Punto intermedio 3
      [33.7701, -118.1937]   // Long Beach
    ]
  },
  {
    title: "Ruta Ensenada - San Francisco",
    type: "ship",
    lineConfig: {color: 'coral', opacity: 0.7, weight: 5},
    dots: [
      [31.8667, -116.6167], // Ensenada
      [33.0, -118.0],       // Punto intermedio 1
      [35.0, -120.0],       // Punto intermedio 2
      [37.7749, -122.4194]   // San Francisco
    ]
  },
  {
    title: "Ruta Progreso - Havana",
    type: "ship",
    lineConfig: {color: 'coral', opacity: 0.7, weight: 5},
    dots: [
      [21.3000, -89.6000],  // Progreso (aprox.)
      [21.5, -88.0],        // Punto intermedio 1
      [22.5, -85.0],        // Punto intermedio 2
      [23.1136, -82.3666]   // La Habana
    ]
  },
  {
    title: "Ruta Guaymas - San Diego",
    type: "ship",
    lineConfig: {color: 'coral', opacity: 0.7, weight: 5},
    dots: [
      [27.9333, -110.9333], // Guaymas (aprox.)
      [29.0, -112.0],       // Punto intermedio 1
      [31.0, -115.0],       // Punto intermedio 2
      [32.7157, -117.1611]   // San Diego
    ]
  },
  {
  title: "Ruta Veracruz - Cartagena (Costeando Yucatán)",
  type: "ship",
  lineConfig: { color: 'coral', opacity: 0.7, weight: 5 },
  dots: [
    [19.1830, -96.1342],   // Puerto de Veracruz
    [18.5, -94.5],         // Cerca de Coatzacoalcos (sur de Veracruz)
    [18.2, -92.8],         // Aproximación a Tabasco
    [18.2, -91.5],         // Suroeste de Campeche
    [19.0, -90.3],         // Cercano a la costa suroeste de Yucatán
    [20.0, -89.3],         // Costa oeste de Yucatán
    [20.8, -88.2],         // Rumbo hacia Progreso (norte de Yucatán)
    [21.3, -87.6],         // Cerca de Cancún (Quintana Roo)
    [20.4, -86.9],         // Próximo a Cozumel
    [19.0, -86.0],         // Cerca de Tulum / Riviera Maya
    [18.0, -85.0],         // Frontera con Belice
    [16.0, -84.0],         // Zona caribeña frente a Honduras
    [14.0, -82.0],         // Cercano a Nicaragua
    [12.0, -80.0],         // Rumbo al Caribe colombiano
    [10.3910, -75.4794]    // Cartagena, Colombia
  ]
  },
    {
    title: "Ruta Lázaro Cárdenas - Valparaíso",
    type: "ship",
    lineConfig: {color: 'coral', opacity: 0.7, weight: 5},
    dots: [
      [17.9000, -102.2000], // Lázaro Cárdenas
      [10.0, -100.0],       // Punto intermedio 1
      [0.0, -90.0],         // Punto intermedio 2
      [-10.0, -80.0],       // Punto intermedio 3
      [-20.0, -75.0],       // Punto intermedio 4
      [-30.0, -73.0],       // Punto intermedio 5
      [-33.0472, -71.6127]   // Valparaíso, Chile
    ]
  },
  {
    title: "Ruta Ensenada - Vancouver",
    type: "ship",
    lineConfig: {color: 'coral', opacity: 0.7, weight: 5},
    dots: [
      [31.8667, -116.6167], // Ensenada
      [34.0, -120.0],       // Punto intermedio 1
      [38.0, -122.0],       // Punto intermedio 2
      [43.0, -124.0],       // Punto intermedio 3
      [49.2827, -123.1207]   // Vancouver, Canadá
    ]
  }
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

let arrayAllowedRoutes = ["car", "truck"], arrayAllowedPolylines = ["ship", "train", "airplane"];
let informationList = [];    // Almacena la información general de las rutas del mapa
let mapLayers = [];          // Almacena las rutas existentes en el mapa
let tempPoints = [];         // Almacena los puntos seleccionados
let tempMarkers = [];        // Almacena los marcadores temporales
let drawingMode = false;     // Controla si se pueden agregar puntos
let movingMarkers = []; // Array global para almacenar marcadores móviles
let movingMarkersByType = {
    car: [],
    truck: [],
    ship: [],
    airplane: [],
    train: []
};

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
            iconSize: [94, 69],   // Tamaño original
            iconAnchor: [47, 69], // La mitad del ancho, altura total
            popupAnchor: [0, -69] // Arriba del ícono
        }
    });
    var greenIcon   = new LeafIcon({iconUrl: 'public/multimedia/pin/marker-greenn.png'}),
        redIcon     = new LeafIcon({iconUrl: 'public/multimedia/pin/marker-redd.png'}),
        purpleIcon  = new LeafIcon({iconUrl: 'public/multimedia/pin/marker-purplee.png'}),
        cyanIcon    = new LeafIcon({iconUrl: 'public/multimedia/pin/marker-cyann.png'}),
        orangeIcon  = new LeafIcon({iconUrl: 'public/multimedia/pin/marker-orangee.png'});

    // Capa adicional (puedes quitarla si no la necesitas)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    function addRoute(base = {title, dots: [], type, lineConfig: {color: 'blue', opacity: 0.7, weight: 5}}) {
        let routeControl;
        switch (base.type) {
            case "car":
            case "truck":
                // Agregar la ruta al mapa con OSRM
                routeControl = L.Routing.control({
                    waypoints: [base.dots[0], base.dots[1]],
                    routeWhileDragging: false,
                    router: L.Routing.osrmv1({
                        language: 'es',  // Configurar idioma a español
                        serviceUrl: 'https://router.project-osrm.org/route/v1'
                    }),
                    createMarker: function(i, waypoint, n) {
                        /*
                        var marker = L.marker(waypoint.latLng, {
                            icon: base.type == "car" ? redIcon : purpleIcon,
                            draggable: true
                        });
                        */
                        var marker = L.marker(waypoint.latLng, {
                            draggable: true
                        });
                        return marker.bindPopup(i === 0 ? "Origen" : "Destino");
                    },
                    lineOptions: {
                        styles: [base.lineConfig]
                    }
                }).addTo(map).on("routesfound", function(e) {
                    //console.log(e)
                    //console.log(e.target._altContainer)
                    e.routes[0].name = e.routes[0].name.split(', ').join(' towards ')
                    // Mover el contenedor al sidebar una vez generado
                    let routingContainer = document.querySelector(".leaflet-routing-container");
                    //console.log(routingContainer)
                    //routingContainer.className = "p-2 fs-5";
                    //routingContainer.parentElement.classList.add('leaflet-routes-custom');
                    document.getElementById("infoTable").appendChild(routingContainer);
                    //let table = document.getElementById("infoTable")
                    //console.log(table.querySelectorAll('.leaflet-routing-alt > h2'))
                    let routeCoordinates = e.routes[0].coordinates.map(coord => [coord.lat, coord.lng]);
                    moveMarkerAlongRoute(routeCoordinates, map, base.type);
                });
                obtainInfoFromRoutes(base, routeControl);
                mapLayers.push(routeControl);
                break;

            case "ship":
                // Rutas marítimas con varios puntos intermedios para "curvar" la línea
                let polylineShip = L.polyline(base.dots, {
                    color: base.lineConfig.color,
                    opacity: base.lineConfig.opacity,
                    weight: base.lineConfig.weight,
                    smoothFactor: 1.5, // Suavizado (aunque con puntos intermedios se nota más la curva)
                    dashArray: "5, 10"
                }).addTo(map);
                polylineShip.bindPopup(base.title);
                obtainInfoFromRoutes(base, polylineShip);
                mapLayers.push(polylineShip);
                // 🔵 EXTRAER COORDENADAS Y MOVER MARCADOR 🔵
                let routeCoordinatesShip = base.dots.map(coord => [coord[0], coord[1]]);
                moveMarkerAlongRoute(routeCoordinatesShip, map, base.type);
                break;

            case "airplane":
                // Rutas aéreas
                let polylineAir = L.polyline(base.dots, {
                    color: base.lineConfig.color,
                    opacity: base.lineConfig.opacity,
                    weight: base.lineConfig.weight,
                    dashArray: "5, 10"
                }).addTo(map);
                obtainInfoFromRoutes(base, polylineAir);
                mapLayers.push(polylineAir);
                // 🔵 EXTRAER COORDENADAS Y MOVER MARCADOR 🔵
                let routeCoordinatesAirplane = base.dots.map(coord => [coord[0], coord[1]]);
                moveMarkerAlongRoute(routeCoordinatesAirplane, map, base.type);
                break;
                //se agrega caso "train" para que se muestre la ruta del tren que no estaba 
            case "train":
                let polylineTrain = L.polyline(base.dots, {
                    color: base.lineConfig.color,
                    opacity: base.lineConfig.opacity,
                    weight: base.lineConfig.weight,
                    dashArray: "5, 10"
                }).addTo(map);
                obtainInfoFromRoutes(base, polylineTrain);
                mapLayers.push(polylineTrain);
                // 🔵 EXTRAER COORDENADAS Y MOVER MARCADOR 🔵
                let routeCoordinatesTrain = base.dots.map(coord => [coord[0], coord[1]]);
                moveMarkerAlongRoute(routeCoordinatesTrain, map, base.type);
                break;
        }
    }

    // Función para limpiar el mapa
    function cleanMap(type) {
        console.log("Eliminando rutas del tipo:", type);
        
        // Eliminar los marcadores móviles del tipo especificado
        if (movingMarkersByType[type]) {
            movingMarkersByType[type].forEach(marker => map.removeLayer(marker));
            movingMarkersByType[type] = []; // Vaciar el arreglo
        }

        // Eliminar rutas del mapa (tanto OSRM como polylines)
        mapLayers = mapLayers.filter(layer => {
            let isOSRMLayer = layer._routes?.[0]?.name;
            let isPolyline = typeof layer.getLatLngs === "function"; // Mejor forma de detectar polylines

            let match = informationList.some(itemList =>
                itemList.type.toLowerCase() === type.toLowerCase() && // Asegurar coincidencia
                (isOSRMLayer ? layer._routes[0].name === itemList.originalDescription : isPolyline)
            );

            if (match) {
                if (isOSRMLayer) {
                    map.removeControl(layer); // Eliminar rutas OSRM
                } else {
                    map.removeLayer(layer); // Eliminar polylines
                }
            }
            return !match; // Mantener solo las rutas que NO coincidan
        });

        // Eliminar elementos coincidentes en informationList
        informationList = informationList.filter(item => item.type !== type);
        console.log("Rutas eliminadas correctamente.");
    }

    function setMarksByType(type) {
        hideControlsMenu();
        dummyList.filter(item => item.type === type).forEach(route => {
            console.log(type + ' route added');
            addRoute(route);
        });
        hideDefaultInfo();
    }

    function hideDefaultInfo() {
        // Ocultar rutas pero no la selección de mapa
        let divs = document.querySelectorAll('.leaflet-routing-container');
        console.log(divs);
        divs.forEach(infoTab => {
            infoTab.classList.add('shadow-none');
            //console.log(infoTab.querySelector("h2"))    
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
            // ✈ 🚢 Para rutas de aviones y barcos
            let description = `Ruta directa de ${base.title}`;
            informationList.push({
                title: base.title ? base.title : "NA",
                originalDescription: description,
                type: base.type,
                description: description
            });
            console.log("Ruta agregada:", base.title, "Descripción:", description);
        }
    }

    // Eventos para tu menú lateral (ajusta a tu HTML/CSS si difiere)
    document.querySelectorAll('.side-menu li a')?.forEach(a => {
        a.addEventListener('click', function () {
            let type = a.querySelector('p').innerText.toLowerCase();
            if (!a.classList.contains('active')) {
                cleanMap(type);
            } else {
                setMarksByType(type);
                hideDefaultInfo();
            }
        });
    });

    document.querySelectorAll('.map-controls')?.forEach(btn => {
        btn.addEventListener('click', function () {
            if (this.classList.contains('startAddingPoints')) {
                startAddingPoints(this);
            } else if (this.classList.contains('finishDrawing')) {
                finishDrawing();
            } else if (this.classList.contains('cancelCoordsCapture')) {
                cancelCoordsCapture();
            }
        });
    });

    // Función para activar la selección de puntos
    function startAddingPoints(btn) {
        btn.closest('.offcanvas').querySelector('.btn-close').click();
        showControlsMenu();
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
        // Si es ruta OSRM y ya tenemos 2 puntos, finalizamos
        if (arrayAllowedRoutes.includes(document.getElementById("type")?.value) &&
            tempPoints.length == 2) {
            finishDrawing();
        }
    }

    // Función para finalizar la selección y trazar la ruta
    function finishDrawing() {
        if (!drawingMode || tempPoints.length < 2) {
            console.log("Debes agregar al menos dos puntos antes de finalizar.");
            return;
        }

        hideControlsMenu();
        drawingMode = false;
        map.off("click", addPointToMap); // Remover evento de clic

        // Eliminar marcadores temporales del mapa
        tempMarkers.forEach(marker => map.removeLayer(marker));
        tempMarkers = [];

        // Obtener valores del formulario
        let title = document.getElementById("title")?.value.trim() || "Nueva Ruta";
        let type = document.getElementById("type")?.value;
        let color = document.getElementById("color")?.value;

        // Crear el nuevo objeto de ruta
        let newRoute = {
            title: title,
            dots: tempPoints,
            type: type,
            lineConfig: { color: color, opacity: 0.7, weight: 5 }
        };

        console.log("Nueva ruta creada:", newRoute);

        // Enviar el nuevo objeto a addRoute para mostrarlo en el mapa
        dummyList.push(newRoute);
        addRoute(newRoute);
        hideDefaultInfo();
    }

    function cancelCoordsCapture() {
        hideControlsMenu();
        if (!map || !tempMarkers || tempMarkers.length === 0) return;
        // Eliminar cada marcador del mapa
        tempMarkers.forEach(marker => {
            map.removeLayer(marker);
        });
        // Vaciar la lista de marcadores
        tempMarkers = [];
        console.log("Selección de marcas cancelada y eliminadas del mapa.");
    }

    // Función para mover el marcador en la ruta (opcional)
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

    function moveMarkerAlongRoute(routeCoordinates, map, type) {
        if (!routeCoordinates || routeCoordinates.length < 2) return;
    
        let iconUrl = type === "car" ? "car-icon.png" :
                      type === "truck" ? "truck-icon.png" :
                      type === "train" ? "train-icon.png" :
                      type === "ship" ? "ship-icon.png" :
                      type === "airplane" ? "airplane-icon.png" : "default-icon.png";
    
        let movingMarker = L.marker(routeCoordinates[0], {
            icon: L.icon({
                iconUrl: iconUrl,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            })
        }).addTo(map);
    
        // Agregar el marcador al arreglo correspondiente
        if (!movingMarkersByType[type]) {
            movingMarkersByType[type] = [];
        }
        movingMarkersByType[type].push(movingMarker);
    
        let index = 0;
        function move() {
            if (index < routeCoordinates.length - 1) {
                index++;
                movingMarker.setLatLng(routeCoordinates[index]);
    
                let delay;
                if (type === "airplane") {
                    //delay = Math.floor(Math.random() * (40000 - 20000) + 20000); // Entre 150ms y 400ms
                    delay = Math.floor(Math.random() * (10000 - 6000) + 6000); // Entre 150ms y 400ms
                } else if (type === "ship") {
                    delay = Math.floor(Math.random() * (40000 - 20000) + 20000); // Entre 5000ms y 12000ms
                } else if (type === "train") {
                    delay = Math.floor(Math.random() * (40000 - 20000) + 20000); // Entre 5000ms y 12000ms
                } else { // "car" y otros casos
                    delay = Math.floor(Math.random() * (4000 - 1000) + 1000); // Entre 500ms y 2000ms
                }

    
                setTimeout(move, delay);
            }
        }
    
        move();
    }
    

    function hideControlsMenu() {
        // Ajusta según tu HTML real
        let submenu = document.querySelector('#nomad-layers-menu .controls-submenu');
        if (submenu) {
            $(submenu).slideUp();
            setTimeout(() => {
                document.querySelector('#nomad-layers-menu')?.classList.remove('controls-active');
            }, 500);
        }
    }

    function showControlsMenu() {
        // Ajusta según tu HTML real
        let menu = document.querySelector('#nomad-layers-menu');
        if (menu) {
            menu.classList.add('controls-active');
            setTimeout(() => {
                let submenu = menu.querySelector('.controls-submenu');
                if (submenu) $(submenu).slideDown();
            }, 200);
        }
    }

    // Para inicializar las rutas (ejemplo):
    // setMarksByType('ship');  // Muestra rutas de barcos
    // setMarksByType('airplane');  // Muestra rutas de aviones
}

