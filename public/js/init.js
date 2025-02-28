async function initializeApp() {
    await loadViewAsync('modules/navbar', 'nomad-nav-menu');

    await loadViewAsync('leaflet/map', 'leaflet-map')

    await loadViewAsync('modules/side-menu', 'nomad-side-menu');

    await loadViewAsync('modules/layers-menu', 'nomad-layers-menu');

    
    initializeMap()
}

initializeApp()

function setActive(svg) {
    changeActiveStatus(svg)
    
    if(svg.dataset.bsToggle === 'offcanvas'){
        setTimeout(() => {
            changeActiveStatus(svg)
        }, 1000)
    }
}
function changeActiveStatus(e) {
    e.classList.toggle('active');
    e.classList.toggle('border-1');
    e.classList.toggle('border-light');
    
    e.classList.toggle('border-5');
    e.classList.toggle('border-info');
}