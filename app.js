let options = ["Rock","Paper","Scissors"]
let randomOptionNum = Math.floor(Math.random() * 3)
let playerOptionNum = 1


const getPlayerOption = (num) =>{
    return options[num]
}


const getCompOption = (num) =>{
    return options[num]
} 



const compOption = getCompOption(randomOptionNum)
const playerOption = getPlayerOption(playerOptionNum)

console.log(compOption)
console.log(playerOption)

