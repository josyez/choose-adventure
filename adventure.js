

let choice = prompt("Choose your dream journey. Pick 'cabin' or 'boat'")
.toLowerCase();
if(choice === 'cabin'){
    alert('You are being chased my zombies. Hurry!!! Enter the cabin and block all windows')

let object = prompt("Pick something heavy. Choose 'table' or 'sofa'").toLowerCase()
    if (object === 'table') {
        alert ('Zoombies cannot see you, good choice!')
    } 

let weapon = prompt("Always prepare for the worst. Pick a weapon 'bat' or 'knife'").toLowerCase()
    if (weapon === 'bat') {
        alert ('Swing away!!..... You woke up :) it was just a dream!')
    }
    else if (weapon === 'knife') {
        alert ('Hope that knife is sharp!!..... You woke up :) it was just a dream!')
    }
    else {
        alert('Thats not an answer, try again')
    }
} 

else if (choice === 'boat') {
    alert('You are in a lake but something is moving in the water!!')   


let action = prompt("Choose between 'not moving' or 'start engine'").toLowerCase()

if (action === 'not moving') {
    alert ('Good choice! whatever is in the water might just leave you alone')
}
let weapon = prompt("Always prepare for the worst. Pick a weapon 'bat or 'knife")
if (weapon === 'bat') {
    alert ('Swing away!!..... You woke up :) it was just a dream!')
}

else if (weapon === 'knife') {
    alert ('Hope that knife is sharp..... You woke up :) it was just a dream!')
}
    else {
    alert('Thats not an answer, try again')
}

}


else if (object === 'sofa') {
   alert ('They will have a hard time getting in but they can see you!')
   let weapon = prompt("Always prepare for the worst. Pick a weapon 'bat' or 'knife'")
}

else if (action === 'start engine') {
    alert ('You might get away!! but now whatever is in the water knows exactly where you are')
    let weapon = prompt("Always prepare for the worst. Pick a weapon 'bat' or 'knife'")
}
