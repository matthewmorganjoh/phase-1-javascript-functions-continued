// code your solution here

function saturdayFun(defaultVariable = "roller-skate"){
    return `This Saturday, I want to ${defaultVariable}!`; 
}

function mondayWork(defaultActivity = "go to the office"){
    return `This Monday, I will ${defaultActivity}.`;
}

function wrapAdjective(flair = "*"){
    return function (adjective = "special"){
        return `You are ${flair}${adjective}${flair}!`;
    }
}
