let car = {
    color: "Red",
    numWheels: 4,
    isFancy: true
}

console.log(car)

//-------------------------------------------------------

let cart ={
    item: "Cookies",
    toBeginning: false,
    items: []
}

if (cart.toBeginning){
    cart.items.splice(0,0, cart.item)
}
else {
    cart.items.push(cart.item)
}

console.log(cart.items)

//------------------------------------------------------

const human = {
    age: 0
}

const babyNameKey = "name"
const babyNameValue = "Goojibear"

human[babyNameKey] = babyNameValue

console.log(human)