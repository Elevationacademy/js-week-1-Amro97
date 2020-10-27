//--------Ex1
function calcAge(cyear,byear){
    return cyear-byear
}
const age = calcAge(2017, 1989)
console.log(age)
//---------Ex2
function possibleAge(cyear,byear){
    return cyear-byear
}
const old = possibleAge(2018,2015)
console.log("you are either",old,'or',old-1,"years old")
//---------Ex3
function isEven(num){
    if(num%2==0)
    return true
    return false
}
console.log(isEven(3))
//---------Ex4
const numbers=[1,2,3,4,5]
for(let number of numbers){
    if(!isEven(number))
    console.log(number)
}
//---------Ex5
function doesExist(arr,key){
    for (let numr of arr)
    {
        if(numr==key)
        return true
    }
    return false
}
console.log(doesExist([1,2,3],2))
console.log(doesExist([1,2,3],5))
//----------Ex6
const calculator = {
    add : function(x,y){
        return x + y
    },
    sub : function (x,y){
        return x-y
    }
}
const result1 = calculator.add(20, 1)
const result2 = calculator.sub(30, 9)

console.log(calculator.add(result1, result2))
//-----------Ex7
function increaseByNameLength(money, name){
    return money+(name.length-1)*100
}
function makeRegal(name){
    return "His Royal Highness, "+name
}
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100)
//--------------Ex8