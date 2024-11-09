const forceOutput = document.getElementById("attractionForce")
const percentOutput = document.getElementById("attractionPercent")

const myMassInput = document.getElementById("myMassInput")
const otherMassInput = document.getElementById("otherMassInput")
const distanceInput = document.getElementById("distanceInput")

const calculateButton = document.getElementById("calculateButton")

const gravitationalConstant = 6.6743 * (10 ** -11)
const earthGravityAccel = 9.8

/*
F = G * m1 * m2
    -----------
        R^2
*/

calculateButton.onclick = () => {
    let myMass = parseFloat(myMassInput.value) / earthGravityAccel
    let otherMass = parseFloat(otherMassInput.value) / earthGravityAccel
    let dist = parseFloat(distanceInput.value)

    if(isNaN(myMass) || isNaN(otherMass) || isNaN(dist)){
        alert("Make sure to input numbers for everything!")
        return
    }

    let force = ( gravitationalConstant * myMass * otherMass ) / dist
    console.log(myMass, otherMass, dist, force)

    if(myMass == otherMass){
        percentOutput.innerText = "You are equally attracted to each other!"
    }
    else if(myMass < otherMass){
        percentOutput.innerText = "You are attracted to them by a Force oF"
    }
    else if(myMass > otherMass){
        percentOutput.innerText = "They are attracted to you by a Force oF"
    }

    forceOutput.innerText = force + " Newtons"
}