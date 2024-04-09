let billAmount = 100
let tipPercentage = 5
function calculateTip(billAmount, tipPercentage) {
  
    if (billAmount >=0 && tipPercentage >=0) {
      let result = billAmount * (tipPercentage / 100)
      return result
    } else {
      console.log("The values tipPercentage or billAmount they are not number positive type")
    }
  }
  console.log("The tip is "+calculateTip(billAmount, tipPercentage))