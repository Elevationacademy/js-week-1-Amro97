//-----------------Ex1
let p1 = {
    name: "Jill",
    age: 21,
    city: "Taybe"
}
let p2 = {
    name: "Robert",
    age: 21,
    city: "Tira"
}

if (p1.age == p2.age){
    if(p1.city == p2.city)
    console.log("Jill wanted to date Robert.")
    else
    console.log("Jill wanted to date Robert, but Couldn't.")
}

//---------------Ex2
myList = [{fruit:"apples", amount:50},{fruit:"oranges", amount:53}]
myList[0].amount += 33
myList.splice(1,1)
console.log(myList)
//------------------Ex3
anotherList = [{fruit:"Swiss", amount:32},{fruit:"banana", amount:10}]
myList.push(anotherList)
console.log(myList)
//-------------------Ex4 
let library = {books:[{title:"Amro", author:"Habib"}]}
myList.push(library.books)
console.log(myList)

