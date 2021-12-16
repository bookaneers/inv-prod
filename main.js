// ---------- global objects ----------

const customersDisc = [
  { id: 1, customer: 'Big Fish', disc: 50 },
  { id: 2, customer: 'Medium Fish', disc: 30 },
  { id: 3, customer: 'Little Fish', disc: 10 },
  { id: 4, customer: 'Small Fish', disc: 0 },
  { id: 5, customer: 'Bryan', disc: 44 }
];

const orders = [
  { id: 1, customer: 'Big Fish', partNumber: 'AA1', qty: 1, price: 3.20 },
  { id: 2, customer: 'Medium Fish', partNumber: 'AA2', qty: 2, price: 4.28 },
  { id: 3, customer: 'Little Fish', partNumber: 'AA3', qty: 3, price: 5.36 },
  { id: 4, customer: 'Small Fish', partNumber: 'AA4', qty: 4, price: 6.44 },
  { id: 5, customer: 'Bryan', partNumber: 'AA5', qty: 5, price: 7.52 },
  { id: 1, customer: 'Big Fish', partNumber: 'AA6', qty: 6, price: 8.60 },
  { id: 2, customer: 'Medium Fish', partNumber: 'AA7', qty: 7, price: 9.68 },
  { id: 3, customer: 'Little Fish', partNumber: 'AA8', qty: 8, price: 10.76 },
];

console.log('Customers Disc:', customersDisc);
console.log('Orders: ',orders);


// ---------- navigation ----------
const $customers = document.querySelector('#customers');
const $orders = document.querySelector('#orders');
const $report = document.querySelector('#report');
const $customersForm = document.querySelector('#c-form');
const $ordersForm = document.querySelector('#o-form');

// ---------- listing customers discount ----------
document.querySelector('#customers-view').addEventListener('click', (event) => {

  $customers.className = 'view';
  $orders.className = 'view hidden';
  $report.className = 'view hidden';
  $customersForm.className = 'view hidden';
  $ordersForm.className = 'view hidden';

  const $uList = document.querySelector('#cust-list');
  $uList.innerHTML = '';

  for (let i = 0; i < customersDisc.length; i++) {

    const $row = document.createElement('div');
    $row.setAttribute('class', 'row');

    const $displayId = document.createElement('span');
    $displayId.textContent = customersDisc[i].id;
    const $displayCustomer = document.createElement('span');
    $displayCustomer.textContent = customersDisc[i].customer;
    const $displayDisc = document.createElement('span');
    $displayDisc.textContent = customersDisc[i].disc;

    const $displayIcon = document.createElement('span');
    const $icon = document.createElement('img');
    // $icon.setAttribute('class', 'pen');
    $icon.setAttribute('src', 'images/redpen.png');
    $icon.setAttribute('class', 'pen');
    // DATA-ID
    $icon.setAttribute('data-id', i);
    $displayIcon.appendChild($icon);

    $row.appendChild($displayId);
    $row.appendChild($displayCustomer);
    $row.appendChild($displayDisc);
    $row.appendChild($displayIcon);

    $uList.appendChild($row);

    console.log(i);
  }

});

// ---------- new entry form ----------
document.querySelector('#new-entry').addEventListener('click', (event) => {
  $customers.className = 'view hidden';
  $orders.className = 'view hidden';
  $report.className = 'view hidden';
  $customersForm.className = 'view';
  $ordersForm.className = 'view hidden';

  const $contactForm = document.querySelector('#contact-form');

  $contactForm.addEventListener('submit', (event) => {

    console.log(event);

    event.preventDefault();

    if ($contactForm.elements['form-customer'].value !== '') {
      const entry = {
        id: customersDisc.length + 1,
        customer: $contactForm.elements['form-customer'].value,
        disc: Number($contactForm.elements['form-disc'].value),
      };

      customersDisc.push(entry);
      console.log(entry);
      console.log(customersDisc);
    }

    document.getElementById('contact-form').reset();

  });
});


// ---------- listing orders ----------
document.querySelector('#orders-view').addEventListener('click', (event) => {

  $customers.className = 'view hidden';
  $orders.className = 'view';
  $report.className = 'view hidden';
  $customersForm.className = 'view hidden';
  $ordersForm.className = 'view hidden';

  const $orderUList = document.querySelector('#order-list');
  $orderUList.innerHTML = '';

  console.log($orderUList);

  for (let i = 0; i < orders.length; i++) {

    const $row = document.createElement('div');
    $row.setAttribute('class', 'row');

    const $displayId = document.createElement('span');
    $displayId.textContent = orders[i].id;

    const $displayCustomer = document.createElement('span');
    $displayCustomer.textContent = orders[i].customer;

    const $displayPart = document.createElement('span');
    $displayPart.textContent = orders[i].partNumber;

    const $displayQty = document.createElement('span');
    $displayQty.textContent = orders[i].qty;

    const $displayPrice = document.createElement('span');
    $displayPrice.textContent = orders[i].price;

    const $displayIcon = document.createElement('span');
    const $icon = document.createElement('img');
    // $icon.setAttribute('class', 'pen');
    $icon.setAttribute('src', 'images/redpen.png');
    $icon.setAttribute('class', 'pen');
    // DATA-ID
    $icon.setAttribute('data-id', i);
    $displayIcon.appendChild($icon);


    $row.appendChild($displayId);
    $row.appendChild($displayCustomer);
    $row.appendChild($displayPart);
    $row.appendChild($displayQty);
    $row.appendChild($displayPrice);
    $row.appendChild($displayIcon);

    $orderUList.appendChild($row);

    console.log(i);
  }
});


// ---------- new order form ----------
document.querySelector('#new-order').addEventListener('click', (event) => {
  $customers.className = 'view hidden';
  $orders.className = 'view hidden';
  $report.className = 'view hidden';
  $customersForm.className = 'view hidden';
  $ordersForm.className = 'view';

  const $orderForm = document.querySelector('#order-form');

  $orderForm.addEventListener('submit', (event) => {
    console.log(event);
    event.preventDefault();

    if ($orderForm.elements['customer-name'].value !== '') {
      const entry = {
        id: Number($orderForm.elements['customer-id'].value),
        customer: $orderForm.elements['customer-name'].value,
        partNumber: $orderForm.elements['form-part'].value,
        qty: Number($orderForm.elements['form-qty'].value),
        price: Number($orderForm.elements['form-price'].value),
      };
      orders.push(entry);
      console.log(entry);
      console.log(orders);
    }
    document.getElementById('order-form').reset();
  });
});


// ---------- report ----------
document.querySelector('#report-view').addEventListener('click', (event) => {
  $customers.className = 'view hidden';
  $orders.className = 'view hidden';
  $report.className = 'view';
  $customersForm.className = 'view hidden';

});
