/* 
🌟 APP: Tip Calculator

=========================================
* calculateBill() -- calculate the Total Bill 
* increasePeople() -- Increase the number of people
* decreasePeople() -- Decrease the number of people 


*/

// Global access to all input 

let billTotalInput = document.getElementById("billTotalInput")
let tipInput = document.getElementById("tipInput")
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
let perPersonTotalDiv = document.getElementById('perPersonTotal')

// Get number of people from number of people div

let numberOfPeople = parseInt(numberOfPeopleDiv.innerText) 

// ** Calculate the total bill per person **
const calculateBill = () => {
    const bill = parseInt(billTotalInput.value)
    
    const tip_percentage = Number(tipInput.value / 100)
    
    const tip_total = bill * tip_percentage

    let total = tip_total + bill

    let per_person_total = parseFloat(total / numberOfPeople) 
    
    perPersonTotalDiv.innerText = `$${per_person_total.toFixed(2)}`
    
  
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {

    numberOfPeople += 1
  
    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()

  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
  
    if (numberOfPeople <= 1){
      return
    }

    numberOfPeople--;

    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
  }