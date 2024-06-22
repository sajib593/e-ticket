const allTikect = document.getElementsByClassName('tikect');
let count = 0;
let count2 = 40;
let total = 0;

for (const tikect of allTikect) {
  tikect.addEventListener('click', function (e) {
    count = count + 1;
    count2 = count2 - 1;

    const seatName = tikect.innerText;
    const economyClass = 'Economy';
    const tickPrice = '550';

    const totalPrice = document.getElementById('Total-price');

    if (count > 4) {
      document.getElementById('alert').classList.remove('hidden');
    } else {
      total = 550 * count;

      setInnerText('Total-price', total);
      e.target.classList.add('common');
      setInnerText('tikect-item', count);
      setInnerText('Total-price', total);
      setInnerText('tikect-stock', count2);

      const selectedContainer = document.getElementById('selected-container');
      const li = document.createElement('li');

      const p = document.createElement('p');
      p.innerText = seatName;

      const p2 = document.createElement('p');
      p2.innerText = economyClass;

      const p3 = document.createElement('p');
      p3.innerText = tickPrice;

      li.appendChild(p);
      li.appendChild(p2);
      li.appendChild(p3);
      selectedContainer.appendChild(li);
      //apply
      document
        .getElementById('btn-apply')
        .addEventListener('click', function (event) {
          const couponCode = document.getElementById('coupon').value;
          let totalElement = document.getElementById('total-cost');

          let grandTotal;

          if (couponCode === 'NEW15') {
            grandTotal = total - (total * 15) / 100;
            document.getElementById('alert-coupon').classList.add('hidden');
            document.getElementById('coupon').style.display = 'none';
            event.target.style.display = 'none';
          } else if (couponCode === 'Couple 20') {
            grandTotal = total - (total * 20) / 100;
            document.getElementById('alert-coupon').classList.add('hidden');
            document.getElementById('coupon').style.display = 'none';
            event.target.style.display = 'none';
          } else {
            document.getElementById('alert-coupon').classList.remove('hidden');
            grandTotal = total;
          }

          totalElement.innerText = grandTotal;
        });
    }
  });
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}
