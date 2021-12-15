const customersDisc = [
  { id: 1, customer: 'Big Fish', disc: 50 },
  { id: 2, customer: 'Medium Fish', disc: 30 },
  { id: 3, customer: 'Little Fish', disc: 10 },
  { id: 4, customer: 'Small Fish', disc: 0 },
  { id: 5, customer: 'Bryan', disc: 44 }
];

const orders = [
  { id: 1, partNumber: 'AA1', qty: 1, price: 3.20 },
  { id: 2, partNumber: 'AA2', qty: 1, price: 3.20 },
  { id: 3, partNumber: 'AA3', qty: 1, price: 3.20 },
  { id: 4, partNumber: 'AA4', qty: 1, price: 3.20 },
  { id: 5, partNumber: 'AA5', qty: 1, price: 3.20 },
  { id: 1, partNumber: 'AA6', qty: 1, price: 3.20 },
  { id: 2, partNumber: 'AA7', qty: 1, price: 3.20 },
  { id: 3, partNumber: 'AA8', qty: 1, price: 3.20 },
];

console.log(customersDisc);
console.log(orders);

const $customers = document.querySelector('#customers');
const $orders = document.querySelector('#orders');
const $report = document.querySelector('#report');
const $customersForm = document.querySelector('#c-form');

document.querySelector('#customers-view').addEventListener('click', (event)=> {

  $customers.className = 'view';
  $orders.className = 'view hidden';
  $report.className = 'view hidden';
  $customersForm.className = 'view hidden';

  const $uList = document.querySelector('#cust-list');

  for (let i = 0; i < customersDisc.length; i++) {

    const $displayId = document.createElement('h3');
    $displayId.textContent = customersDisc[i].id;
    const $displayCustomer = document.createElement('h3');
    $displayCustomer.textContent = customersDisc[i].customer;
    const $displayDisc = document.createElement('h3');
    $displayDisc.textContent = customersDisc[i].disc;

    const $icon = document.createElement('img');
    // $icon.setAttribute('class', 'pen');
    $icon.setAttribute('src', 'images/redpen.png');
    $icon.setAttribute('class', 'pen');
    // DATA-ID
    $icon.setAttribute('data-id', i);

    $uList.appendChild($displayId);
    $uList.appendChild($displayCustomer);
    $uList.appendChild($displayDisc);
    $uList.appendChild($icon);
    console.log(i);
  }

});

document.querySelector('#new-entry').addEventListener('click', (event) => {
  $customers.className = 'view hidden';
  $orders.className = 'view hidden';
  $report.className = 'view hidden';
  $customersForm.className = 'view';

  const $contactForm = document.querySelector('#contact-form');

  $contactForm.addEventListener('submit', function (event) {

    event.preventDefault();
    const entry = {
      id: customersDisc.length + 1,
      customer: $contactForm.elements['form-customer'].value,
      discount: $contactForm.elements['form-disc'].value,
    };

    customersDisc.push(entry);
    console.log(entry);
    console.log(customersDisc);

    document.getElementById('contact-form').reset();
  });
});

document.querySelector('#orders-view').addEventListener('click', (event) => {
  $customers.className = 'view hidden';
  $orders.className = 'view';
  $report.className = 'view hidden';
  $customersForm.className = 'view hidden';

});

document.querySelector('#report-view').addEventListener('click', (event) => {
  $customers.className = 'view hidden';
  $orders.className = 'view hidden';
  $report.className = 'view';
  $customersForm.className = 'view hidden';

});
