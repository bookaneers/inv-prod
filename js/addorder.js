 // ---------- (SUBMIT) ADDING OR REPLACING AN ENTRY ----------

// query the entire form
const $orderForm = document.getElementById('order-form');

// function to add or replace an entry to the database
$orderForm.addEventListener('submit', function (event) {

    // The preventDefault() method of the Event interface tells
    // the user agent that if the event does not get explicitly
    // handled, its default action should not be taken as it
    // normally would be.
    event.preventDefault();

    // ---------- ADDING AN ENTRY ----------

    // if data.editing is null, it must add the item
    if (data.editing === null) {

        // querying the DOM for displying entries
        const $uList = document.querySelector('ul');

        // create a temporary object
        const entry = {
            todaysDate: new Date().toLocaleString(),
            department: $userDept,
            employee: $userName,
            // labelType: $orderForm.elements['label-type'].value,
            // labelKind: $orderForm.elements['label-kind'].value,
            // labelName: $orderForm.elements['label-name'].value,
            // labelImage: $contactForm.elements['current-label'].value,

            labels: getLabel(),
            status: 'waiting for lead',
            entryId: data.nextEntryId,
        };

        if (entry.labels.length !== 0) {
            // add object to array (database)
            data.entries.unshift(entry);

            // call newEntry function with the entry parameter and
            // store it in a variable
            const $item = newItem(entry);

            // add item to list of items
            $uList.prepend($item);

            // increment next entry id
            data.nextEntryId++;
        }

        // reset form
        document.getElementById('order-form').reset();

        // remove all options for first bar    
        document.getElementById('label-kind').length = 1; 

        // clear form right at page download
        document.getElementById('order-form').reset();

        // reset picture
        document.getElementById('label-req1').src="images/logo-small.png";
        document.getElementById('label-req2').src="images/logo-small.png";
        document.getElementById('label-req3').src="images/logo-small.png";
        document.getElementById('label-req4').src="images/logo-small.png";
    }
});
