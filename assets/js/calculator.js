const amount = document.querySelector('#amount'); 
const term = document.querySelector('#term');  
const rate = document.querySelector('#rate');  
const calculateBtn = document.querySelector('#calculateBtn'); 
const monthly = document.querySelector('#monthly');  
const total = document.querySelector('#total');  


calculateBtn.addEventListener('click', function () {
    const Amount = Number(amount.value); 
    const Term = Number(term.value);  
    const Rate = Number(rate.value);

    const aylikFaiz = (Rate / 100) / 12;
    const aylik = Amount * aylikFaiz / (1 - Math.pow(1 + aylikFaiz, -Term));
    const toplam = aylik * Term;

    monthly.textContent = `$${aylik}`; 
    total.textContent = `$${toplam}`;  
});
