/* exported data */

// local storage database
var data = {
    view: 'entry-form',
    entries: [],
    editing: null,
    nextEntryId: 1
};

// to clean the local storage database
// localStorage.clear();

// reading local database
var previousDataJSON = localStorage.getItem('javascript-local-storage');

// if database is not empty, transfer data to object data
if (previousDataJSON !== null) {
    data = JSON.parse(previousDataJSON);
}

// save changes from the object to the local database, before website is unloaded
window.addEventListener('beforeunload', function (event) {
    var dataJSON = JSON.stringify(data);
    localStorage.setItem('javascript-local-storage', dataJSON);
});

// global variables

var $labelPath = '';
var tempLabelPath = '';
var $userDept = '';
var $userName = '';

// global objects
const departments = {
    'admin': {},
    'accounting': {}, 
    'engineering': {},  
    'freight': {}, 
    'laser': {}, 
    'machine-shop': {}, 
    'maintenance': {}, 
    'marketing': {
        'fernandof':{'password':'fern2022'},
        'amandaa':{'password':'aman2022'},
        'nathans':{'password':'nath2022'},
        'lead':{'password':'lead2022'}
    }, 
    'powder-coating': {}, 
    'press-brake': {}, 
    'production': {}, 
    'purchasing': {}, 
    'sales': {}, 
    'shipping': {},
    'tube-fab': {}, 
    'welding': {},
    'parts-iws': {}, 
    'service': {}, 
    'sew-shop': {}, 
    'shop-iws': {}
};

const area = {
    'breezeway': {},
    'carpenters-shed': {}, 
    'compressor-room': {},  
    'engineering': {}, 
    'laser': {}, 
    'machining': {}, 
    'marketing': {}, 
    'outside-steel-rack': {}, 
    'paint-shop': {}, 
    'press-brake': {}, 
    'pressure-washer-room': {}, 
    'printer-room': {}, 
    'r-and-d': {},
    'rbo-shelf': {}, 
    'scheduler': {},
    'shipping': {}, 
    'sp-assembly': {}, 
    'sp-weld': {}, 
    'supermarket': {},
    'training-room': {},
    'tube-fab': {}, 
    'wash-bay': {}, 
    'warehouse': {}, 
    'weld-shop': {}
}

const labelFamily = {
    'kanban-system': {
        'kanbaned-external-products':['images/kanban-system/kanbaned-external-products/external-front.pdf',
            'images/kanban-system/kanbaned-external-products/external-back.pdf',
            'images/kanban-system/kanbaned-external-products/kanban-label-blue.pdf',
            'images/kanban-system/kanbaned-external-products/kanban-label-red.pdf'
            ],
        'kanbaned-internal-products':['images/kanban-system/kanbaned-internal-products/internal-front.pdf',
            'images/kanban-system/kanbaned-internal-products/internal-back.pdf',
            'images/kanban-system/kanbaned-internal-products/kanban-label-blue.pdf',
            'images/kanban-system/kanbaned-internal-products/kanban-label-red.pdf'
        ]    
    },
    'something else': {}
};