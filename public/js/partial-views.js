function loadView(viewName, IdElement = null, isAppend = false) {
    fetch(`views/${viewName}.html`)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.text();
        })
        .then(html => {
            if (IdElement === null) {
                console.error('Elemento contenedor (IdElement) no definido');
            } else {
                isAppend ? document.getElementById(IdElement).insertAdjacentHTML('beforeend', html) 
                         : document.getElementById(IdElement).innerHTML = html;
            }
        })
        .catch(error => console.error('Error al cargar la vista parcial:', error));
}

function loadModule(viewName, IdElement = null, isAppend = false) {
    fetch(`views/module${viewName}.html`)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.text();
        })
        .then(html => {
            if (IdElement === null) {
                console.error('Elemento contenedor (IdElement) no definido');
            } else {
                isAppend ? document.getElementById(IdElement).insertAdjacentHTML('beforeend', html) 
                         : document.getElementById(IdElement).innerHTML = html;
            }
        })
        .catch(error => console.error('Error al cargar la vista parcial:', error));
}



async function loadViewAsync(viewName, IdElement = null, isAppend = false) {
    try {
        const response = await fetch(`views/${viewName}.html`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const html = await response.text();
        
        if (IdElement === null) {
            console.error('Elemento contenedor (IdElement) no definido');
        } else {
            isAppend ? document.getElementById(IdElement).insertAdjacentHTML('beforeend', html) 
                     : document.getElementById(IdElement).innerHTML = html;
        }
    } catch (error) {
        console.error('Error al cargar la vista parcial:', error);
    }
}

async function loadModuleAsync(viewName, IdElement = null, isAppend = false) {
    try {
        const response = await fetch(`views/module${viewName}.html`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const html = await response.text();
        
        if (IdElement === null) {
            console.error('Elemento contenedor (IdElement) no definido');
        } else {
            isAppend ? document.getElementById(IdElement).insertAdjacentHTML('beforeend', html) 
                     : document.getElementById(IdElement).innerHTML = html;
        }
    } catch (error) {
        console.error('Error al cargar la vista parcial:', error);
    }
}

