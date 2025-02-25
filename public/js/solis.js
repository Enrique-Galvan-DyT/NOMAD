console.log('%cInitializing', 'background: yellow; color: black; padding: 4px;')
//Basics
let website = {
    placeholder: " - Navigational Optimization & Mapping for Autonomous Directions",
    metaTags: `<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">`,
    head: document.querySelector('head'),
    body: document.querySelector('body'),
    links: [''],
    headSRC: [''],
    bodySRC: [''],
}
//Use it from a list if you want
/*
const resources = [{
    AniJS           : 0,
    AnimateCSS      : 0,
    AnimeJS         : 0,
    Bootstrap       : 1,
    BootstrapIcons  : 0,
    ChartJS         : 0,
    DayJS           : 0,
    GSAP            : 0,
    Ionicons        : 1,
    JQuery          : 0,
    KUTEJS          : 0,
    Leaflet         : 0,
    Motion          : 0,
    RoughNotation   : 0,
    ScrollRevealJS  : 0,
    TypedJS         : 0,
    VelocityJS      : 0,
    Vivus           : 0,
    //and more as you want
}]
*/
const resourcesAllowed = [
    {
        name: `anijs`,
        realName: `Ani.js`,
        page: `https://anijs.github.io/`,
        github: `https://github.com/anijs/anijs.git`,
        versions :
        {
            0: {
                key: [`1`, `0.9.3`],
                head: {
                    link: {
                        0: `<link rel="stylesheet" href="http://anijs.github.io/lib/anicollection/anicollection.css">`, 
                    },
                },
                body: {
                    src: {
                        0: `<script src="anijs-min.js"></script>`,
                    },
                },
                download: `https://github.com/anijs/anijs/archive/master.zip`,
            }
        }
    },
    {
        name: `animatecss`,
        realName: `Animate.css`,
        page: `https://animate.style/`,
        github: `https://github.com/animate-css/animate.css.git`,
        versions :
        {
            0: {
                key: [`1`, `4.1.1`],
                head: {
                    link: {
                        0: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">`,
                    },
                },
                npm: `npm install animate.css`,
            }
        }
    },
    {
        name: `animejs`,
        realName: `Anime.js`,
        page: `https://animejs.com/`,
        github: `https://github.com/juliangarnier/anime.git`,
        versions :
        {
            0: {
                key: [`1`, `3.2.2`],
                body: {
                    src: {
                        0: `<script src="anime.min.js"></script>`,
                    },
                },
                npm: `npm install animejs`,
            }
        }
    },
    {
        name: `bootstrap`,
        realName: `Bootstrap`,
        page: `https://getbootstrap.com/`,
        github: `https://github.com/twbs/bootstrap`,
        versions :
        {
            0: {
                key: [`1`, `5.3.3`],
                head: {
                    link: {
                        0: `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`,
                    },
                },
                body: {
                    src: {
                        0: `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>`,
                    }, 
                },
                npm:`npm install bootstrap`,
                download: `https://github.com/twbs/bootstrap/releases/download/v5.3.3/bootstrap-5.3.3-dist.zip`,
            }
        }
    },
    {
        name: `bootstrapicons`,
        realName: `Bootstrap Icons`,
        page: `https://icons.getbootstrap.com/`,
        github: `https://github.com/twbs/icons`,
        versions :
        {
            0: {
                key: [`1`, `1.11.3`],
                head: {
                    link: {
                        0: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">`,
                    },
                },
                npm:`npm install bootstrap-icons`,
                download: `https://github.com/twbs/icons/releases/latest/`,
            }
        }
    },
    {
        name: `chartjs`,
        realName: `Chart.js`,
        page: `https://www.chartjs.org/docs/latest/`,
        github: `https://github.com/chartjs/Chart.js`,
        versions :
        {
            0: {
                key: [`1`, `4.4.7`],
                body: {
                    src: {
                        0: `<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>`,
                    } 
                },
                npm: `npm install chart.js`,
                download: `https://github.com/chartjs/Chart.js/archive/refs/heads/master.zip`,
            }
        }
    },
    {
        name: `datatables`,
        realName: `DataTables`,
        page: `https://datatables.net/`,
        versions :
        {
            0: {
                key: [`1`, `2.1.8`],
                head:{
                    link: {
                        0: `<link href="https://cdn.datatables.net/2.1.8/css/dataTables.dataTables.min.css" rel="stylesheet">`,
                    }
                },
                body: {
                    src: {
                        0: ` <script type="text/javascript" src="https://cdn.datatables.net/2.1.8/js/dataTables.min.js"></script>`,    
                    }
                },
                npm: `npm install datatables.net-dt`,
            }
        }
    },
    {
        name: `dayjs`,
        realName: `Day.js`,
        page: `https://day.js.org/en/`,
        github: `https://github.com/iamkun/dayjs/`,
        versions :
        {
            0: {
                key: [`1`, `1.11.13`],
                body: {
                    src: {
                        0: `<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>`,
                        1: `<script src="https://cdn.jsdelivr.net/npm/dayjs@1/locale/es-mx.js"></script>`,
                        2: `<script>setTimeout(() => {
                                        // Establecer la configuración regional
                                        dayjs.locale('es-mx');

                                        // Obtener la fecha actual formateada
                                        const formattedDate = dayjs().format('D [de] MMMM [del] YYYY');
                                        console.log('Day.js responde con la fecha actual: ' + formattedDate);
                                    }, 2000);
                            </script>`,
                    } 
                },
                npm: `npm install dayjs`,
                download: `https://registry.npmjs.org/dayjs/-/dayjs-1.11.13.tgz`,
            }
        }
    },
    {
        name: `gsap`,
        realName: `GSAP`,
        page: `https://gsap.com/`,
        github: `https://github.com/greensock/GSAP.git`,
        versions :
        {
            0: {
                key: [`1`, `3.12.5`],
                body: {
                    src: {
                        0: `<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>`,
                    },
                },
                download: `https://gsap.com/community/files/file/20-gsap-public-files/?do=download&csrfKey=c99ab97bb840445755690f1e696f3e81`,
                npm: `npm install gsap`,
            }
        }
    },
    {
        name: `ionicons`,
        realName: `Ionicons`,
        page: `https://ionic.io/ionicons`,
        github: `https://github.com/ionic-team/ionicons`,
        versions :
        {
            0: {
                key: [`1`, `7.4.0`],
                body: {
                    src: {
                        0: `<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>`,
                    },
                },
                download: `https://github.com/ionic-team/ionicons/archive/refs/heads/main.zip`,
            }
        }
    },
    {
        name: `jquery`,
        realName: `jQuery`,
        page: `https://jquery.com/`,
        github: `https://github.com/jquery/jquery`,
        versions :
        {
            0: {
                key: [`1`, `3.7.1`],
                body: {
                    src: {
                        0: `<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>`,
                    },
                },
                npm:`npm install jquery`,
                download: `https://code.jquery.com/jquery-3.7.1.min.js`,
            }
        }
    },
    {
        name: `kutejs`,
        realName: `KUTE.js`,
        page: `https://thednp.github.io/kute.js/index.html`,
        github: `https://github.com/thednp/kute.js.git`,
        versions :
        {
            0: {
                key: [`1`, `2.2.4`],
                body: {
                    src: {
                        0: `<script src="https://cdn.jsdelivr.net/npm/kute.js@2.2.4/dist/kute.min.js"></script>`,
                    },
                },
                npm:`npm install kute.js`,
                download: `https://github.com/thednp/kute.js/archive/master.zip`,
            }
        }
    },
    {
        name: `leaflet`,
        realName: `Leaflet`,
        page: `https://leafletjs.com/`,
        github: `https://github.com/Leaflet/Leaflet`,
        versions :
        {
            0: {
                key: [`1`, `1.9.4`],
                head: {
                    link: {
                        0: `<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />`,
                        1: `<link rel="stylesheet" href="public/css/leaflet.css" />`,
                    },
                },
                body: {
                    src: {
                        0: `<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>`,
                        1: `<script src="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.js"></script>`,
                    },    
                },
                npm:`npm install leaflet`,
                download: `https://github.com/Leaflet/Leaflet/archive/refs/heads/main.zip`,
            }
        }
    },
    {
        name: `motion`,
        realName: `Motion`,
        page: `https://motion.dev/`,
        github: `https://github.com/motiondivision/motion`,
        versions :
        {
            0: {
                key: [`1`, `11.13.3`],
                
                body: {
                    src: {
                        0: `<script src="https://cdn.jsdelivr.net/npm/motion@11.11.13/dist/motion.js"></script>`,
                    },
                },
                npm:`npm install motion`,
                download: `https://github.com/motiondivision/motion.git`,
            }
        }
    },
    {
        name: `roughnotation`,
        realName: `Rough Notation`,
        page: `https://roughnotation.com/`,
        github: `https://github.com/rough-stuff/rough-notation`,
        versions :
        {
            0: {
                key: [`1`, ``],
                body: {
                    src: {
                        0: `<script type="module" src="https://unpkg.com/rough-notation?module"></script>`,
                    },
                },
                npm:`npm install rough-notation`,
                download: `https://github.com/rough-stuff/rough-notation/archive/refs/heads/master.zip`,
            }
        }
    },
    {
        name: `scrollrevealjs`,
        realName: `ScrollReveal`,
        page: `https://scrollrevealjs.org/`,
        github: `https://github.com/jlmakes/scrollreveal`,
        versions :
        {
            0: {
                key: [`1`, `4.0.0`],
                head: {
                    src: {
                        0: `<script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>`,
                    },
                },
                npm:`npm install scrollreveal`,
                download: `https://github.com/jlmakes/scrollreveal/archive/refs/heads/master.zip`,
            }
        }
    },
    {
        name: `tabulator`,
        realName: `Tabulator`,
        page: `https://tabulator.info/`,
        github: `https://github.com/olifolkerd/tabulator`,
        versions :
        {
            0: {
                key: [`1`, `6.3.0`],
                head:{
                    link: {
                        0: `<link href="https://unpkg.com/tabulator-tables@6.3.0/dist/css/tabulator.min.css" rel="stylesheet">`,
                    }
                },
                body: {
                    src: {
                        0: ` <script type="text/javascript" src="https://unpkg.com/tabulator-tables@6.3.0/dist/js/tabulator.min.js"></script>`,    
                    }
                },
                npm: `npm install tabulator-tables --save`,
                download: `https://github.com/olifolkerd/tabulator/archive/master.zip`,
            }
        }
    },
    {
        name: `typedjs`,
        realName: `Typed.js`,
        page: `https://mattboldt.github.io/typed.js/docs/`,
        github: `https://github.com/mattboldt/typed.js`,
        versions :
        {
            0: {
                key: [`1`, `2.1.0`],
                body: {
                    src: {
                        0: `<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>`,
                    },
                },
                npm:`npm install typed.js`,
                download: `https://github.com/mattboldt/typed.js/archive/refs/heads/main.zip`,
            }
        }
    },
    {
        name: `velocityjs`,
        realName: `Velocity.js`,
        page: `http://velocityjs.org/`,
        github: `https://github.com/julianshapiro/velocity/`,
        versions :
        {
            0: {
                key: [`1`, `2.0.6`],
                body: {
                    src: {
                        0: `<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/2.0.6/velocity.min.js"></script>`,
                    },
                },
                npm:`npm install velocity-animate@beta`,
                download: `https://github.com/julianshapiro/velocity/archive/refs/heads/master.zip`,
            }
        }
    },
    {
        name: `vivus`,
        realName: `vivus`,
        page: `https://maxwellito.github.io/vivus/`,
        github: `https://github.com/maxwellito/vivus`,
        versions :
        {
            0: {
                key: [`1`, `0.4.6`],
                body: {
                    src: {
                        0: `<script src="https://cdnjs.cloudflare.com/ajax/libs/vivus/0.4.6/vivus.min.js"></script>`,
                    },
                },
                npm:`npm install vivus`,
                download: `https://github.com/maxwellito/vivus/archive/refs/heads/master.zip`,
            }
        }
    },
    /*
    //and more as you want
    {
        name: ``,
        realName: ``,
        page: ``,
        github: ``,
        versions :
        {
            0: {
                key: [`1`, ``],
                head: {
                    link: {
                        0: `<link rel="stylesheet" href="">`,
                    }
                },
                body: {
                    src{
                        0: `<script src=""></script>`,
                    }:
                },
                npm: ``,
                download: ``,
            }
        }
    },
    */
    {
        name: `nomad`,
        realName: `nomad.js`,
        page: `*`,
        github: `*`,
        versions :
        {
            0: {
                key: [`1`, ``],
                head: {
                    link: {
                        0: `<link href="public/css/init.css" rel="stylesheet">`,
                        1: `<link href="public/css/public.css" rel="stylesheet">`,
                        2: `<link rel="icon" href="public/multimedia/map.ico" type="image/x-icon">`,
                    },
                },
                body: {
                    src: {
                        //0: `<script src="public/js/custom.js"></script>`,    
                        0: `<script src="public/js/partial-views.js"></script>`,
                        1: `<script src="public/js/init.js"></script>`,
                        2: `<script src="public/js/leaflet-config.js"></script>`,
                    }
                },
                npm: ``,
                download: ``,
            }
        }
    },
    {
        name: `custom`,
        realName: `custom.js`,
        page: ``,
        github: ``,
        versions :
        {
            0: {
                key: [`1`, ``],
                head: {
                    link: {
                        0: `<link href="system/css/init.css" rel="stylesheet">`,
                    },
                },
                body: {
                    src: {
                        0: `<script src="system/js/custom.js"></script>`,    
                    }
                },
                npm: ``,
                download: ``,
            }
        }
    },
]
//Basic config
function initConfiguration(resourcesList = [{
    //You can set by default some resources if you want
    Bootstrap       : 1,
    BootstrapIcons  : 1,
    }]) {
    console.log('%cSetting Configuration', 'background: yellow; color: black; padding: 4px;')
    let result = {
        links: [],
        headSRC: [],
        bodySRC: []
    };
    resourcesAllowed.forEach(resourceAllowed => {
        resourcesList.forEach(resource => {
            if (resource[resourceAllowed.name] && resource[resourceAllowed.name] != 0)
            {
                for (let v in resourceAllowed.versions) {
                    if (resourceAllowed.versions[v].key.includes(String(resource[resourceAllowed.name]))) {
                        console.log(`%cUsing %c${resourceAllowed.realName} %c| %cv${resource[resourceAllowed.name] == 1 ? `${resourceAllowed.versions[v].key[1]} (latest)` : `${resource[resourceAllowed.name]}`}\n${(resourceAllowed.page ? `%cVisit ${resourceAllowed.page} to read the docs`: `%cThis is a customized file` )} `, 'color: blue; font-weight: bold;', 'color: green; font-weight: bold;', 'color: lightgray; font-weight: bold;', 'color: red; font-weight: bold;', 'color: slateblue; font-weight: bold;')
                        // Procesar enlaces CSS
                        if (resourceAllowed.versions[v].head && resourceAllowed.versions[v].head.link) {
                            for (let href_v in resourceAllowed.versions[v].head.link) {
                                result.links.push(resourceAllowed.versions[v].head.link[href_v]);
                            }
                        }
                        
                        // Procesar scripts en <head>
                        if (resourceAllowed.versions[v].head && resourceAllowed.versions[v].head.src) {
                            for (let src_v in resourceAllowed.versions[v].head.src) {
                                result.headSRC.push(resourceAllowed.versions[v].head.src[src_v]);
                            }
                        }

                        // Procesar scripts en <body>
                        if (resourceAllowed.versions[v].body && resourceAllowed.versions[v].body.src) {
                            for (let src_v in resourceAllowed.versions[v].body.src) {
                                result.bodySRC.push(resourceAllowed.versions[v].body.src[src_v]);
                            }
                        }
                    }
                }
                
            }
        });
    });
    return result;
}
//Basic setup
function initResources(website = [{
        //You can set by default some website info if you want
        placeholder: "Main page | N.O.M.A.D. – Navigational Optimization & Mapping for Autonomous Directions",
        metaTags: '<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">',
        head: document.querySelector('head'),
        body: document.querySelector('body'),
        links: [''],
        headSRC: [''],
        bodySRC: ['']
    }])
    {
    console.log('%cRunning Resources', 'background: yellow; color: black; padding: 4px;')
    //Load header styles
    let styles = ''
    website.links.forEach(href => {
        styles += `${href}`
    });
    
    //Load scripts <head>
    website.headSRC.forEach(tag => {
        if (tag.includes('<script')) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = tag;
            const scriptTag = tempDiv.querySelector('script');

            if (scriptTag) {
                const newScript = document.createElement('script');
                if (scriptTag.src) {
                    newScript.src = scriptTag.src;
                } else {
                    newScript.textContent = scriptTag.innerHTML;
                }
                newScript.async = false; // Asegurar ejecución en orden
                website.body.appendChild(newScript);
                console.log(`%cRunning Header Script: %c${newScript.src || 'Inline Script'}`, 'color: magenta; font-weight: bold;', 'color: green; font-weight: bold;');
            }
        }
    });

    //Set header content
    website.head.innerHTML = `${website.metaTags}<title>${(website.body.getAttribute('page') ? website.body.getAttribute('page') : 'Page') + website.placeholder}</title>${styles}`
    
    //Load scripts <body>
    website.bodySRC.forEach(tag => {
        if (tag.includes('<script')) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = tag;
            const scriptTag = tempDiv.querySelector('script');

            if (scriptTag) {
                const newScript = document.createElement('script');
                if (scriptTag.src) {
                    newScript.src = scriptTag.src;
                } else {
                    newScript.textContent = scriptTag.innerHTML;
                }
                newScript.async = false; // Asegurar ejecución en orden
                website.body.appendChild(newScript);
                console.log(`%cRunning Body Script: %c${newScript.src || 'Inline Script'}`, 'color: magenta; font-weight: bold;', 'color: green; font-weight: bold;');
            }
        }
    });


    console.log('%cPage Ready', 'background: yellow; color: black; padding: 4px;')
}

document.addEventListener('DOMContentLoaded', () => {
    let resources = website.body.getAttributeNames().map(attrName => ({
        [attrName]: website.body.getAttribute(attrName)
    }));
    Object.assign(website, initConfiguration(resources));
    initResources(website);
});

