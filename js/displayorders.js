// README: You will find an addEventListener(load) to
// display the local database. 
// There are two addEventListener(click) to update the 
// status of an order or delete it for good. But it 
// will first switch view to 'orders'.


// querying orders button
const $myOrders = document.querySelector('#orders-button');
$myOrders.addEventListener('click', function (event) {
  // switch buttons
  document.querySelector('#new-order-button').className = 'button-off';
  document.querySelector('#orders-button').className = 'button-on';

  // switch views
  document.querySelector('#new-order').className = 'view hidden';
  document.querySelector('#orders').className = 'view';

// ---------- TO DISPLAY ENTRIES ----------

  // to check if local database is empty
  if (data.entries.length === 0) {
    console.log("EMPTY DATABASE");
  }

  // querying the DOM for displying entries
  const $uList = document.querySelector('ul');

  // clean the ul for the next orders' display
  document.querySelector('ul').innerHTML = "";

  // iterate over the database to display all the entries
  for (let i = 0; i < data.entries.length; i++) {
    
    // if signed in user is amandaa
    // display all orders
    if ($userName === 'amandaa') {
      // call function to display entry
      var $item = newItem(data.entries[i]);
      // append entry to UL
      $uList.appendChild($item);

    // if signed in user is a  lead
    // display all orders from the department
    } else if ($userName === 'lead') {
      if ($userDept === data.entries[i].department) {
        // call function to display entry
        var $item = newItem(data.entries[i]);
        // append entry to UL
        $uList.appendChild($item);
      }
    // if none of the above, display signed in user's orders
    } else {
      if ($userName === data.entries[i].employee) {
        // call function to display entry
        var $item = newItem(data.entries[i]);
        // append entry to UL
        $uList.appendChild($item);
      }
    }
  }
});

// querying icons
const $uList = document.querySelector('ul');
$uList.addEventListener('click', function (event) {

  // if user clicks outide of the icons, it will
  // automatically return to the beginning of the event.
  if (event.target.className !== 'approved' 
  && event.target.className !== 'processing'  
  && event.target.className !== 'delivered' 
  && event.target.className !== 'delete') {
    return;
  }

  // if users (leads only) clicks on 'approved' icon' it 
  // will change the order's status to 'approved by lead'.
  if (event.target.className === 'approved') {

    // confirm method to display a message and 
    // colect 'ok/cancel' answer from user
    let text = 'Update to "approved by lead"';
    if (confirm(text) == true) {
      const $orderNumber = parseInt(event.target.getAttribute('data-id'));
  
      for (let i = 0; i < data.entries.length; i++) {
        if ($orderNumber === data.entries[i].entryId) {
          data.entries[i].status = 'approved by lead';
        }
      }
      // reset page
      document.querySelector('#orders-button').click();
    } 
  }

  // if users (amandaa only) clicks on 'processing' icon' it 
  // will change the order's status to 'processing'.
  if (event.target.className === 'processing') {

    // confirm method to display a message and 
    // colect 'ok/cancel' answer from user
    let text = 'Update to "processing"';
    if (confirm(text) == true) {
      const $orderNumber = parseInt(event.target.getAttribute('data-id'));
  
      for (let i = 0; i < data.entries.length; i++) {
        if ($orderNumber === data.entries[i].entryId) {
          data.entries[i].status = 'processing';
        }
      }
      // reset page
      document.querySelector('#orders-button').click();
    } 
  }

  // if users (amandaa only) clicks on 'delivered' icon' it 
  // will change the order's status to 'delivered'.
  if (event.target.className === 'delivered') {

    // confirm method to display a message and 
    // colect 'ok/cancel' answer from user
    let text = 'Update to "delivered"';
    if (confirm(text) == true) {
      const $orderNumber = parseInt(event.target.getAttribute('data-id'));
  
      for (let i = 0; i < data.entries.length; i++) {
        if ($orderNumber === data.entries[i].entryId) {
          data.entries[i].status = 'delivered';
        }
      }
      // reset page
      document.querySelector('#orders-button').click();
    } 
  }

  // if users (all) clicks on 'delete' icon' it 
  // will delete order for good.
  if (event.target.className === 'delete') {

    // confirm method to display a message and 
    // colect 'ok/cancel' answer from user
    let text = "Delete this order?";
    if (confirm(text) == true) {
      const $orderNumber = parseInt(event.target.getAttribute('data-id'));

      for (let i = 0; i < data.entries.length; i++) {
        if ($orderNumber === data.entries[i].entryId) {
          data.entries.splice(i,1);
        }
      }
      // reset page
      document.querySelector('#orders-button').click();
    } 
  } 
});