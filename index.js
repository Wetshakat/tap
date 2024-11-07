let addButton = document.getElementById('btn');
let clNameInput = document.getElementById('clName').getElementsByTagName('input')[0];
let qtyInput = document.getElementById('qty').getElementsByTagName('input')[0];
let priceInput = document.getElementById('price').getElementsByTagName('input')[0];
let totalQuantityDisplay = document.getElementById('tqt');
let totalAmountDisplay = document.getElementById('tam');


let totalQuantity = 0;
let totalAmount = 0;


const addOrder = () => {
    let customerName = clNameInput.value;
    let quantity = parseInt(qtyInput.value);
    let price = parseFloat(priceInput.value);

    
    if (!customerName || isNaN(quantity) || isNaN(price)) {
        alert("Please fill in all fields correctly!");
        return;
    }

    totalQuantity += quantity;
    totalAmount += (quantity * price);


    totalQuantityDisplay.innerText = `Total Quantity Sold: ${totalQuantity}`;
    totalAmountDisplay.innerText = `Total Amount: ${totalAmount.toFixed(2)}`;


    clNameInput.value = '';
    qtyInput.value = '';
    priceInput.value = '';
};


addButton.addEventListener('click', addOrder);
