const currencyOne= document.getElementById('currency-one');
const ammountOne= document.getElementById('amount-one');
const currencyTwo= document.getElementById('currency-two');
const ammountTwo= document.getElementById('ammount-two');

const rateEl=document.getElementById('rate');
const swap=document.getElementById('swap');

function calculate(){
const c_one=currencyOne.value;
const c_two=currencyTwo.value;
fetch(`https://v6.exchangerate-api.com/v6/a909d8e7d078b62ba7c60b8a/latest/${c_one}`)
    .then(res=>res.json())
    .then(data=>
        {
            const rate=data.rates[currencyTwo];
            rateEl.innerText=`1 ${currencyOne}=${rate}${currencyTwo}`;
            ammountTwo.value=(ammountOne.value*rate).toFixed(2);
        });
}
currencyOne.addEventListener('change',calculate);
amountOne.addEventListener('input',calculate); 
currencyTwo.addEventListener('change',calculate);
ammountTwo.addEventListener('change',calculate);
swap.addEventListener('click',()=>{
    const temp =currencyOne.value;
    currencyOne.value=currencyTwo.value;
    currencyTwo=temp;
    calculate();
});
calculate();
