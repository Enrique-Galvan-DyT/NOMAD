console.log('%cAdding Navbar Menu', 'background: cyan; color: black; padding: 4px;')
loadViewAsync('modules/navbar', 'nomad-nav-menu')

console.log('%cAdding Side Menu', 'background: cyan; color: black; padding: 4px;')
loadViewAsync('modules/side-menu', 'nomad-side-menu')

console.log('%cAdding Layers Menu', 'background: cyan; color: black; padding: 4px;')
loadViewAsync('modules/layers-menu', 'nomad-layers-menu')

function setActive(svg) {
    changeActiveStatus(svg)
    
    if(svg.dataset.bsToggle === 'offcanvas'){
        setTimeout(() => {
            changeActiveStatus(svg)
        }, 1000)
    }
    //console.log(svg)
    //$(svg).toggle('active');
}

function changeActiveStatus(e) {
    e.classList.toggle('active');
    e.classList.toggle('border-1');
    e.classList.toggle('border-light');
    
    e.classList.toggle('border-5');
    e.classList.toggle('border-info');
}