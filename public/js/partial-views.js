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
    return new Promise((resolve, reject) => {
        try {
            $.ajax({
                url: `views/${viewName}.html`,
                type: "GET",
                contentType: "application/json", // Especifica que el contenido es JSON
                success: function (response) {
                    //console.log(response)
                    console.log('%cAdding '+ IdElement.split('-').join(' '), 'background: cyan; color: black; padding: 4px;');
                    if (response) {
                        IdElement === null ? console.error('Elemento contenedor (IdElement) no definido') : (isAppend ? $('#' + IdElement).append(response) : $('#' + IdElement).html(response));
                        resolve(true)
                    }else{
                        reject(false)
                    }
                },
                error: function(xhr, status, error) {
                    console.log(`%cError haciendo comunicación con el servidor: views/${viewName}.html`, 'background: red; color: white; padding: 4px;');
                    reject(false)
                }
            });
        } catch (error) {
            console.log(`%cError al cargar la vista parcial: views/${viewName}.html\n${error}`, 'background: red; color: white; padding: 4px;');
            reject(false)
        }
    });                    

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

