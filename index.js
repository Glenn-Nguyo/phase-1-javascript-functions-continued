// code your solution here
function saturdayFun(activity = 'roller-skate' ){
 return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
let wrapAdjective = function(newAdj = "*"){
 return function innerFunction(adj = "special"){
     return `You are ${newAdj}${adj}${newAdj}!`
 }
}
wrapAdjective("*a hard worker*")