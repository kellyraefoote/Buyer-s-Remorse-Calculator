document.querySelector('#check').addEventListener('click', check) 

function check() {
    let item = document.querySelector('#item').value
    let price = document.querySelector('#price').value 

    let priceWithInterest = price*1.08*1.04
    let finalPrice = priceWithInterest.toFixed(2)
    

    document.querySelector('#comparisonHere').innerText = `One year from now, would you rather have ${item} or $${finalPrice}?`
}