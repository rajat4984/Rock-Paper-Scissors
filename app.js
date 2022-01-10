let options = ["Rock","Paper","Scissors"]
let randomOptionNum = Math.floor(Math.random() * 3)


getCompOption = (num) =>{
    return options[num]
} 

let compOption = getCompOption(randomOptionNum)
console.log(compOption)

