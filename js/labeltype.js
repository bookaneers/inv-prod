// README
// This program has an addEventListener(click) on the new-order 
// button to change the view to 'new entry view'.
// In addition, there is another addEventListener(load) that 
// creates a cascade menu to help place a new order.
// IMPORTANT: do not use window.onload if you have 2 forms in the 
// same html document.

// querying the entry form button
const $entryForm = document.querySelector('#new-order-button');
$entryForm.addEventListener('click', function () {
    // switch buttons
    document.querySelector('#new-order-button').className = 'button-on';
    document.querySelector('#orders-button').className = 'button-off';

    // switch views
    document.querySelector('#new-order').className = 'view';
    document.querySelector('#orders').className = 'view hidden';

    // clear form right at page download
    document.getElementById('order-form').reset();
    
    // reset picture
    document.getElementById('label-req1').src="images/logo-small.png";
    document.getElementById('label-req2').src="images/logo-small.png";
    document.getElementById('label-req3').src="images/logo-small.png";
    document.getElementById('label-req4').src="images/logo-small.png";
});

// cascade menu for placing new orders.
window.addEventListener('load', function() {
    var $typeSel = document.getElementById('label-type');
    var $kindSel = document.getElementById('label-kind');
    var $nameSel = document.getElementById('label-name');
    for (var type in labelFamily) {
        $typeSel.options[$typeSel.options.length] = new Option(type, type);
    }
    $typeSel.onchange = function() {
        $kindSel.length = 1; // remove all options of the first bar
        if (this.selectedIndex < 1) return; // done   
        for (var kind in labelFamily[this.value]) {
            $kindSel.options[$kindSel.options.length] = new Option(kind, kind);
        }
    }
    $typeSel.onchange(); // reset in case page is reloaded

    $kindSel.onchange = function () {
        var setUpKind='label-req0';
        // $nameSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done   
        var names = labelFamily[$typeSel.value][this.value];
        for (var i = 0; i < names.length; i++) {
            // $nameSel.options[$nameSel.options.length] = new Option(names[i], names[i]);
            setUpKind = setUpKind.slice(0,9)+(i+1).toString();
            document.getElementById(setUpKind).src=names[i];
        }
    }
});
