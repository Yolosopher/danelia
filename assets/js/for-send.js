// variables
let basketItems = document.querySelectorAll('.basket-items-ul > li');

const totalPriceInput = document.getElementById('totalPrice');
const totalItems = document.getElementById('totalQuantity');

// functions
const updateTotalPrice = () => {
    let total = 0;
    basketItems.forEach(li => {
        let quantity = +li.querySelector('.choose-quantity').value;
        let unitPrice = +li.querySelector('.x1-price-price span:first-child').innerText;

        let liPrice = quantity * unitPrice;
        total += liPrice;	
    })
    totalPriceInput.value = total;
}
const updateTotalItems = () => {
    totalItems.value = basketItems.length;
}
const checkingCartValues = () => {
    updateTotalPrice();
    updateTotalItems();
}

// run
// checkingCartValues();