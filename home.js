
const validPin = 1234
const transactionData = []


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


// function to set inner text
function setInnerText (value){
const availableBalanceElement = document.getElementById('available-balance')
availableBalanceElement.innerText = value
}



// add Money fruture---------------------------------
document.getElementById("add-money-btn").addEventListener('click', function(e){
e.preventDefault()
const bank = getInputValue("bank")
const accountNumber = getInputValue("account-number")
const amount = getInputValueNumber("add-amount")
if(amount <= 0 && amount < 50){
    alert('Invaied Amount, Please give valid Amount.')
    return;
}


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
setInnerText(totalNewAvailableBalance)

const data = {
    name: "Add money",
    date:new Date().toLocaleTimeString()
}

transactionData.push(data)


})


// cashout fruture-----------------
document.getElementById("withdrow-btn").addEventListener('click', function(e){
e.preventDefault()

const amount = getInputValueNumber('withdrow-amount')
const availableBalance = getInnerText("available-balance")
if(amount<=0 || amount>availableBalance){
    alert('Please Provide Valid Amount')
    return;
}


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
setInnerText(totalNewAvailableBalance)

const data ={
    name: "Cash Out",
    date:new Date().toLocaleTimeString()
}

transactionData.push(data)


})


document.getElementById("transjection-button").addEventListener('click', function(){
    const transactionContainer = document.getElementById("transaction-container")
transactionContainer.innerText =""


    for ( const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML = `
           <div class=" bg-white rounded-xl p-3 flex justify-between mt-5">
    <div class="flex items-center">
        <div class="p-3 rounded-full bg-[#F4F5F7]">
            <img src="./assets/wallet1.png" class="mx-auto " alt="">
        </div>
        <div class="ml-3">
            <h1>${data.name}</h1>
            <p>${data.date}</p>
        </div>
    </div>

    <div>
        <i class= "fa-solid fa-ellipsis-vertical"></i>
    </div>
</div>

        `
        transactionContainer.appendChild(div)
     
    
        
    }
    
})

// toggle button style sortcut

function handleToggleButtonToggle (id){
    const formButtons = document.getElementsByClassName('form-btn')
    for(const btn of formButtons){
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }
    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2", "bg-[#0874f20d]")

}

// aro button troggle sortcurt 1
function handleToggle (id){
     const forms = document.getElementsByClassName('form')
   for (const form of forms){
    form.style.display = "none"
   }
   document.getElementById(id).style.display= 'block'


}

//button toggle sortcurt2
document.getElementById("add-money-button").addEventListener('click', function(e){
   const forms = document.getElementsByClassName('form')

   for (const form of forms){
    form.style.display = "none"
   }
   document.getElementById('add-money-parents').style.display= 'block'
   
   handleToggleButtonToggle("add-money-button")
})




document.getElementById("cash-out-button").addEventListener('click', function(){
    const forms = document.getElementsByClassName('form')
   for (const form of forms){
    form.style.display = "none"
   }
   document.getElementById("cash-out-parents").style.display= 'block'

   handleToggleButtonToggle("cash-out-button")
})



document.getElementById("Transfer-button").addEventListener('click', function(){
    const forms = document.getElementsByClassName('form')
   for (const form of forms){
    form.style.display = "none"
   }
   document.getElementById("transfer-parents").style.display= 'block'
   handleToggleButtonToggle("Transfer-button")
})



document.getElementById("get-bonus-button").addEventListener('click', function(){
    const forms = document.getElementsByClassName('form')
   for (const form of forms){
    form.style.display = "none"
   }
   document.getElementById("get-bonus-parents").style.display= 'block'
   handleToggleButtonToggle("get-bonus-button")
})



document.getElementById("pay-bill-button").addEventListener('click', function(){
   handleToggle("pay-bil-parents")    // sortcut 1
   handleToggleButtonToggle("pay-bill-button")
})




document.getElementById("transjection-button").addEventListener('click', function(){
   handleToggle("tranjection-parents")   // sortcut 1
   handleToggleButtonToggle("transjection-button")
})





// button toggle
// document.getElementById("add-money-button").addEventListener('click', function(){
//     document.getElementById("cash-out-parents").style.display = "none"
//     document.getElementById("add-money-parents").style.display = "block"
// })


// document.getElementById("cash-out-button").addEventListener('click', function(){
//     document.getElementById("add-money-parents").style.display =  "none"
//     document.getElementById("cash-out-parents").style.display = "block"
// })