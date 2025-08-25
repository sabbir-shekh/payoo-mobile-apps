
const validPin = 1234
// add Money fruture---------------------------------
document.getElementById("add-money-btn").addEventListener('click', function(e){
e.preventDefault()
const bank = document.getElementById("bank").value
const accountNumber = document.getElementById("account-number").value
const amount = parseInt(document.getElementById("add-amount").value)


const pin  = parseInt(document.getElementById("add-pin").value)


const availableBalance = parseInt(document.getElementById("available-balance").innerText)
console.log(availableBalance)

if(accountNumber.length < 11){
    alert('Please Provide valid Account Number')
    return;
}

if(pin !== validPin){
    alert('Please provide valid pin number')
        return;
    }
    

const totalNewAvailableBalance = amount + availableBalance;

document.getElementById("available-balance").innerText = totalNewAvailableBalance

})


// cashout fruture-----------------
document.getElementById("withdrow-btn").addEventListener('click', function(e){
e.preventDefault()

const amount = parseInt(document.getElementById('withdrow-amount').value)
const availableBalance = parseInt(document.getElementById("available-balance").innerText)


const totalNewAvailableBalance = availableBalance - amount
console.log(totalNewAvailableBalance);
document.getElementById("available-balance").innerText = totalNewAvailableBalance



})






// button toggle
document.getElementById("add-money-button").addEventListener('click', function(){
    document.getElementById("cash-out-parents").style.display = "none"
    document.getElementById("add-money-parents").style.display = "block"
})


document.getElementById("cash-out-button").addEventListener('click', function(){
    document.getElementById("add-money-parents").style.display =  "none"
    document.getElementById("cash-out-parents").style.display = "block"
})