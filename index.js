function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
//console.log(saturdayFun());

const mondayWork = function (task = "go to the office") {
    return `This Monday, I will ${task}.`;
}

// console.log(mondayWork());

function wrapAdjective(flair = "*") {
    return function (work = "special") {
        return `You are ${flair}${work}${flair}!`;
    }
}

const encouragingPromptFunction = wrapAdjective("%")("a dedicated programmer");
console.log(encouragingPromptFunction);