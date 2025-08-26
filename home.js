
const validPin = 1234


// function to get element value 
function getInputValueNumber (id){
    const inputField =document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber
}

function getInputValue (id){
    const inputField =document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}

// function to get inner text
function getInnerText(id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
return elementValueNumber
}





// add Money fruture---------------------------------
document.getElementById("add-money-btn").addEventListener('click', function(e){
e.preventDefault()
const bank = getInputValue("bank")
const accountNumber = getInputValue("account-number")
const amount = getInputValueNumber("add-amount")


const pin  = getInputValueNumber("add-pin")


const availableBalance = getInnerText("available-balance")
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

const amount = getInputValueNumber('withdrow-amount')
const availableBalance = getInnerText("available-balance")
const agentNumber = getInputValue("agent-number")
const pinNumber = getInputValueNumber("pin-2")

if(agentNumber.length < 11){
    alert('Please Provide valid Account Number')
    return;
}

if(pinNumber!== validPin){
    alert('Please provide valid pin number')
        return;
    }
    

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